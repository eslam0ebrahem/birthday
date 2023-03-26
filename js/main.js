document.addEventListener("DOMContentLoaded", () => {
  // Define a function to display the birthday message
  function displayBirthdayMessage() {
    const message = document.createElement("p");
    message.textContent = "Happy Birthday! Let's celebrate 🎉🎂🎁";

    // Hide the FlipDown element and add the message to the parent element of the FlipDown element
    const flipdownElem = document.getElementById("flipdown");
    flipdownElem.hidden = true;
    flipdownElem.parentNode.appendChild(message);
  }

  // Define the FlipDown options
  const flipdownOptions = {
    theme: "light",
  };

  // Get the current time in seconds
  const nowInSeconds = new Date().getTime() / 1000;

  // Get the birthday time in seconds
  const birthdayInMinskTimezone = new Date(Date.UTC(2023, 2, 27, -2)); // 27/3 in Minsk timezone
  const birthdayInSeconds = birthdayInMinskTimezone.getTime() / 1000;

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
