const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");
const timerInput = document.getElementById("timer"); // Element reference
let interval;
let totalSeconds = 0;

function updateDisplay() {
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  timerInput.value = `${h}:${m}:${s}`; 
}

function startTimer() {
 const timeStr = timerInput.value;
  const [hours, minutes, seconds = 0] = timeStr.split(":").map(Number); // ← FIXED

  // Your validation (but + not needed now):
  if (seconds > 59) alert("Seconds ≤ 59"); // numbers!
  if (minutes > 59) alert("Minutes ≤ 59");

    totalSeconds = hours * 3600 + minutes * 60 + seconds; // Clean math
     if (totalSeconds <= 0) return;
  interval = setInterval(() => {
    totalSeconds--;
    updateDisplay();
    if (totalSeconds <= 0) {
      clearInterval(interval);
      alert("Time's up!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  totalSeconds = 0; // 25:00 default
  updateDisplay();
}

startE1.addEventListener("click", startTimer);
stopE1.addEventListener("click", stopTimer);
resetE1.addEventListener("click", resetTimer);
