// === Wheel Spin Logic ===
let currentRotation = 0;

function spin() {
  const wheel = document.getElementById("wheel");
  const resultDisplay = document.getElementById("result");

  const randomSpin = 1800 + Math.floor(Math.random() * 1800);
  currentRotation += randomSpin;
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  const sliceAngle = 360 / 6;
  const normalizedRotation = currentRotation % 360;
  const index = Math.floor((360 - normalizedRotation) / sliceAngle) % 6;

  const options = [
    "💧 Drink a glass of water",
    "🌬️ Take 5 deep breaths",
    "✨ Write one thing you’re proud of",
    "😁 Smile at yourself in the mirror",
    "🧘 Stretch for 1 minute",
    "💌 Send a kind text to someone"
  ];

  setTimeout(() => {
    resultDisplay.innerText = "Your task: " + options[index];
  }, 5000);
}
