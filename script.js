let timerInterval;
let timerRunning = false;
let minutes = 0;
let seconds = 0;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const timerDisplay = document.getElementById('timer');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  if (!timerRunning) {
    minutes = parseInt(document.getElementById('minutes').value);
    seconds = parseInt(document.getElementById('seconds').value);
    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;

    const totalTime = minutes * 60 + seconds;

    if (totalTime > 0) {
      timerRunning = true;
      timerInterval = setInterval(updateTimer, 1000);
      updateTimer(); // Initial update
    }
  }
}

function updateTimer() {
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
  } else {
    stopTimer();
    timerDisplay.textContent = 'Time is up!';
    return;
  }

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerDisplay.textContent = '00:00';
  minutes = 0;
  seconds = 0;
}
