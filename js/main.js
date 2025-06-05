// Define a central point variable
let points = 1;

document.addEventListener("DOMContentLoaded", function () {
  const gameContainer = document.getElementById("game-container");
  const scoreDisplay = document.getElementById("score-display");

  function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${points}`;
  }

  // Initialize the game
  function initGame() {
    // Set a message in the game container
    gameContainer.innerHTML =
      "Welcome to Cosmic Ascendancy: The Path to Prosperity!";

    // Access the points here
    console.log("Points:", points);
    updateScoreDisplay();
  }

  // Call the initGame function to start the game
  initGame();
});
