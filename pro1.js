// Generate a random number between 1 and 10
const magicNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the player's guess
document.getElementById("guessButton").onclick = function () {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const resultMessage = document.getElementById("resultMessage");

  if (userGuess === magicNumber) {
    resultMessage.textContent = "You got it! 🎉";
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = "Try again!";
    resultMessage.style.color = "red";
  }
};
