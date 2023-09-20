
// Define a central point variable
let points = 1;

document.addEventListener("DOMContentLoaded", function () {
  const gameContainer = document.getElementById("game-container");

  // Initialize the game
  function initGame() {
    // Set a message in the game container
    gameContainer.innerHTML =
      "Welcome to Cosmic Ascendancy: The Path to Prosperity!";

    // Access the points here
    console.log("Points:", points);
  }

  // Call the initGame function to start the game
  initGame();
});
