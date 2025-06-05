// Restore saved points or start at 1
const storedPoints = localStorage.getItem("points");
let points = storedPoints !== null ? parseInt(storedPoints, 10) : 1;

function incrementPoints(amount = 1) {
  points += amount;
  localStorage.setItem("points", points);
}

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
