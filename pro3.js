// Function to toggle the happy face visibility
document.getElementById("toggleButton").onclick = function () {
  const happyFace = document.getElementById("happyFace");
  if (happyFace.classList.contains("hidden")) {
    happyFace.classList.remove("hidden");
  } else {
    happyFace.classList.add("hidden");
  }
};
