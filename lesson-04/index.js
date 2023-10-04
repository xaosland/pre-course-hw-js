let timerId; // переменная, которая будет хранить ID таймера

const startButton = document.getElementById("start");
startButton.addEventListener("click", startClock);

function startClock() {
  if (!timerId) {
    timerId = setInterval(updateClock, 1);
  }
}

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopClock);

function stopClock() {
  clearInterval(timerId);
  timerId = null;
}
stopClock();

function updateClock() {
  const clock = document.getElementById("clock");
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  clock.textContent = hours + ":" + minutes + ":" + seconds;
}
