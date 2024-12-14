// Countdown Timer
const countdownTimer = document.getElementById("countdown-timer");

// Set the ICO start date (example)
const icoStartDate = new Date("2025-01-02T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = icoStartDate - now;

    if (timeLeft <= 0) {
        countdownTimer.textContent = "ICO is live!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// Copy to Clipboard
const copyBtn = document.getElementById("copy-btn");
const contractAddress = document.getElementById("contract-address");

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(contractAddress.textContent).then(() => {
        alert("Smart Contract Address Copied!");
    }).catch(err => {
        console.error("Error copying to clipboard:", err);
    });
});
// Get the pop-up and buttons
const popup = document.getElementById("google-form-popup");
const openFormBtn = document.getElementById("open-form-btn");
const closePopupBtn = document.getElementById("close-popup-btn");

// Open the pop-up
openFormBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

// Close the pop-up
closePopupBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});

// Close the pop-up when clicking outside the content
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.add("hidden");
    }
});

