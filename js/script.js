

$(document).ready(() => {
    play()
})

function play() {

    for (let i = 0; i < 4; i++) {
        var startin = getR(0,10000)
        setTimeout(() => {
        var x = getR(0, $(document).width()-300)
        var y = getR(0, $(document).height()-300)
        var deg = getR(0, 360)
        var scale = getR(.5, 1)
        var e = $(`
                <div deg="${deg}" id="fly-${i}" class="mariposa" scale = "${scale}" style="transform: rotate(${deg}deg) scale(${scale}); top: ${y}px; left: ${x}px;">
                <div class="mariposa-turn fly-${i}">
                    <div class="mariposa-flutter"></div>
                    </div>
                </div>`).appendTo(".stage");
        
            render($(e))
        }, startin);
    }
}


function render(element, c) {
    // caculate new position
    // if (c > 10) return;
    var break_counter = 0
    var myy = parseFloat(element.css("top"))
    var myx = parseFloat(element.css("left"))
    while (true) {
        // get random direction and distance
        var last_deg = parseFloat(element.attr('deg'))
        var deg_dir = getR(-180, 180) + last_deg
        var dist = getR(200, 300) * parseFloat(element.attr('scale'))
        var newy = myy + sin(deg_dir) * dist
        var newx = myx + cos(deg_dir) * dist
        // check for validation
        if (newx >= 0 && newy >= 0 && newx <= $(document).width()-200 & newy <= $(document).height()-200) break;
        if (break_counter++ > 10000) {
            break_counter = 0
            break;
        }
        else {

        }
    }

    // random watiing
    var timerotate = getR(500, 1000)
    var timemove = getR(500, 1000)
    var sleep = getR(1000, 10000)
    setTimeout(() => {
        var id = element.attr("id")
        console.log(id)
        var scale = element.attr('scale')
        element.css({ "transform": `rotate(${deg_dir}deg) scale(${scale})` })
        setTimeout(() => {
            $("." + id + ' > div').attr('class', 'mariposa-s-flutter')

            element.css({ 'top': newy + 'px', 'left': newx + 'px' })
            // new round
            setTimeout(() => {
                $("." + id + '> div').attr('class', 'mariposa-flutter')
                c = c ?? 1
                render(element, ++c)
            }, timemove+1000)

        }, timerotate + 1000);
    }, sleep);
}













const cos = (degree) => Math.cos(degree * Math.PI / 180);
const sin = (degree) => Math.sin(degree * Math.PI / 180);
const getR = (min, max) => Math.random() * (max - min) + min;
