$(document).ready(() => {
  play();
});

function play() {
  const flyCount = 4;
  for (let i = 0; i < flyCount; i++) {
    const startingTime = getR(0, 10000);
    setTimeout(() => {
      createFly(i);
    }, startingTime);
  }
}

function createFly(index) {
  const x = getR(0, $(document).width() - 300);
  const y = getR(0, $(document).height() - 300);
  const deg = getR(0, 360);
  const scale = getR(0.5, 1);

  const fly = $(`
      <div id="fly-${index}" class="mariposa" style="transform: rotate(${deg}deg) scale(${scale}); top: ${y}px; left: ${x}px;">
        <div class="mariposa-turn fly-${index}">
          <div class="mariposa-flutter"></div>
        </div>
      </div>
    `).appendTo(".stage");

  animateFly(fly, deg, scale);
}

function animateFly(fly, lastDeg, scale) {
  const degDir = getR(-180, 180) + lastDeg;
  const dist = getR(200, 300) * scale;
  const currentY = parseFloat(fly.css("top"));
  const currentX = parseFloat(fly.css("left"));

  let newTop = currentY + sin(degDir) * dist;
  let newLeft = currentX + cos(degDir) * dist;

  if (
    newLeft < 0 ||
    newTop < 0 ||
    newLeft > $(document).width() - 200 ||
    newTop > $(document).height() - 200
  ) {
    [newTop, newLeft] = [currentY, currentX];
  }

  const rotationTime = getR(500, 1000);
  const movementTime = getR(500, 1000);
  const sleepTime = getR(1000, 10000);

  setTimeout(() => {
    fly.css({
      transform: `rotate(${degDir}deg) scale(${scale})`,
    });

    setTimeout(() => {
      const id = fly.attr("id");

      $("." + id + " > div").attr("class", "mariposa-s-flutter");

      fly.animate(
        {
          top: newTop + "px",
          left: newLeft + "px",
        },
        movementTime,
        () => {
          $("." + id + "> div").attr("class", "mariposa-flutter");

          setTimeout(() => {
            animateFly(fly, degDir, scale);
          }, movementTime + 1000);
        }
      );
    }, rotationTime + 1000);
  }, sleepTime);
}

const cos = (degree) => Math.cos((degree * Math.PI) / 180);
const sin = (degree) => Math.sin((degree * Math.PI) / 180);
const getR = (min, max) => Math.random() * (max - min) + min;
