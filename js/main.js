// Restore saved points or start at 1
const storedPoints = localStorage.getItem("points");
let points = storedPoints !== null ? parseInt(storedPoints, 10) : 1;

function incrementPoints(amount = 1) {
  points += amount;
  localStorage.setItem("points", points);
}

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
