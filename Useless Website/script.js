const button = document.getElementById("catchButton");
const confettiContainer = document.getElementById("confetti-container");

const missMessages = [
  "Aww! You missed again 😜",
  "Next time please 😆",
  "Oops! Too slow 😝",
  "You can do better! 😁",
  "Almost had it! 🤭",
  "Missed me again! 😂",
];

// Move button randomly on hover
button.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
  showFloatingMessage();
});

// When button is caught
button.addEventListener("click", () => {
  showWinAnimation();
});

// Show floating funny messages
function showFloatingMessage() {
  const msg = missMessages[Math.floor(Math.random() * missMessages.length)];
  const floating = document.createElement("div");
  floating.classList.add("floating-msg");
  floating.textContent = msg;

  // Random position
  floating.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
  floating.style.top = `${Math.random() * (window.innerHeight - 100)}px`;

  document.body.appendChild(floating);
  setTimeout(() => floating.remove(), 2000);
}

// When caught
function showWinAnimation() {
  createConfetti();
  const winText = document.createElement("div");
  winText.classList.add("floating-msg");
  winText.style.color = "#ff006e";
  winText.style.fontSize = "2rem";
  winText.textContent = "🎉 You Got Me! 🎉";
  winText.style.left = "50%";
  winText.style.top = "50%";
  winText.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(winText);
  setTimeout(() => winText.remove(), 3000);
}

// Confetti rains from the top of the screen
function createConfetti() {
  const totalPieces = 120;

  for (let i = 0; i < totalPieces; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Random bright color
    const hue = Math.floor(Math.random() * 360);
    confetti.style.backgroundColor = `hsl(${hue}, 90%, 60%)`;

    // Start at top of page
    confetti.style.top = "0px";           
    confetti.style.left = `${Math.random() * 100}%`;

    // Random size & speed
    const size = 6 + Math.random() * 8;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.animationDuration = `${3 + Math.random() * 3}s`;

    // Delay to make fall more natural
    confetti.style.animationDelay = `${Math.random()}s`;

    // Add to container
    confettiContainer.appendChild(confetti);

    // Remove after animation
    setTimeout(() => confetti.remove(), 6000);
  }
}

