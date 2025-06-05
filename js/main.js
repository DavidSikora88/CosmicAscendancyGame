// Define a central point variable
let points = 1;

document.addEventListener("DOMContentLoaded", function () {
  const gameContainer = document.getElementById("game-container");
  const scoreEl = document.getElementById("score");
  const gatherBtn = document.getElementById("gather-btn");

  // Initialize the game
  function initGame() {
    // Set a message in the game container
    gameContainer.innerHTML =
      "Welcome to Cosmic Ascendancy: The Path to Prosperity!";

    // Display the starting points
    scoreEl.textContent = points;
    console.log("Points:", points);
  }

  // Increase points and update the score when gather button is clicked
  gatherBtn.addEventListener("click", function () {
    points++;
    scoreEl.textContent = points;
  });

  // Call the initGame function to start the game
  initGame();
});
