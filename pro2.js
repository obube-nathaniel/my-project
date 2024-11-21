// Array to store the light colors
const lightColors = ["red", "yellow", "green"];
let currentLight = 0;

// Function to change the traffic light color
document.getElementById("changeLightButton").onclick = function () {
  // Remove the current color class
  const trafficLight = document.getElementById("trafficLight");
  trafficLight.classList.remove(lightColors[currentLight]);

  // Update to the next color in the sequence
  currentLight = (currentLight + 1) % lightColors.length;

  // Add the new color class
  trafficLight.classList.add(lightColors[currentLight]);
};
