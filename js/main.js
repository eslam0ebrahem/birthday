document.addEventListener("DOMContentLoaded", () => {
  // Define a function to display the birthday message
  function displayBirthdayMessage() {
    const message = document.getElementById("message");

    message.innerHTML =
      "Happy Birthday to the most amazing person in the world! I am so grateful to have you in my life, and I feel lucky every day to be with someone as kind, loving, and beautiful as you.<br><br>As you celebrate another year of life, I want to take a moment to acknowledge how much you mean to me. You bring so much joy and happiness into my life, and I can't imagine living without you. Your presence makes every day brighter, and I am constantly in awe of your strength, resilience, and grace.<br><br>I know that this year has been challenging for you, especially with the loss of your Archi best friend. Losing a pet is never easy, and I can't imagine how much pain and heartache you must be feeling. Your dog was more than just a pet to you; he was a companion, a confidant, and a source of unconditional love. I am so sorry for your loss, and I want you to know that I am here for you, always.<br><br>On your birthday, I want to celebrate not just the incredible person you are but also the special bond you shared with your dog. I know how much he meant to you, and I want you to know that he will always hold a special place in your heart. He may be gone, but he will never be forgotten, and the love you shared will continue to live on.<br><br>I want you to make a wish for all the things that your heart desires. I hope that all your dreams come true, and that you continue to grow, learn, and thrive. I promise to always be there for you, through thick and thin, and to love you with all my heart.<br><br>Thank you for being my rock, my best friend, and my soulmate. You make my life so much better, and I can't wait to see what the future holds for us. I hope your birthday is as amazing as you are, and that it brings you all the love, happiness, and joy you deserve.🎉🎂🎁";

    // Hide the FlipDown element and add the message to the parent element of the FlipDown element
    const flipdownElem = document.getElementById("flipdown");
    flipdownElem.hidden = true;
    flipdownElem.parentNode.appendChild(message);

    var numCopies = 3;
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");

    for (var i = 0; i < numCopies; i++) {
      var copy1 = img1.cloneNode(true);
      var copy2 = img2.cloneNode(true);

      copy1.src = "1.png";
      copy2.src = "2.png";

      copy1.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      copy1.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      copy1.style.setProperty("--tx", Math.floor(Math.random() * 200 - 100));
      copy1.style.setProperty("--ty", Math.floor(Math.random() * 200 - 100));
      copy1.classList.remove("fade");
      void copy1.offsetWidth;
      copy1.classList.add("fade");

      copy2.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      copy2.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      copy2.style.setProperty("--tx", Math.floor(Math.random() * 200 - 100));
      copy2.style.setProperty("--ty", Math.floor(Math.random() * 200 - 100));
      copy2.classList.remove("fade");
      void copy2.offsetWidth;
      copy2.classList.add("fade");

      document.body.appendChild(copy1);
      document.body.appendChild(copy2);
    }
  }

  // Define the FlipDown options
  const flipdownOptions = {
    theme: "light",
  };

  // Define the Minsk timezone offset in minutes
  const minskTimezoneOffsetInMinutes = -120;

  // Get the current time in seconds
  const nowInSeconds = Math.floor(Date.now() / 1000);

  // Get the birthday time in seconds
  const birthdayInMinskTimezone = new Date(
    Date.UTC(2023, 2, 27, 0, minskTimezoneOffsetInMinutes)
  );
  const birthdayInSeconds = Math.floor(
    birthdayInMinskTimezone.getTime() / 1000
  );

  if (nowInSeconds >= birthdayInSeconds) {
    // Display the birthday message if the birthday has passed
    displayBirthdayMessage();
  } else {
    // Set up FlipDown
    const flipdown = new FlipDown(
      birthdayInSeconds,
      "flipdown",
      flipdownOptions
    )

      // Start the countdown
      .start()

      // Display the birthday message when the countdown ends
      .ifEnded(displayBirthdayMessage);

    // Toggle the light theme and dark theme classes on the body and FlipDown elements
    const bodyElem = document.body;
    bodyElem.classList.toggle("light-theme");
    document
      .querySelector("#flipdown")
      .classList.toggle("flipdown__theme-dark");
  }
});
