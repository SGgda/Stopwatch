startbutton = document.getElementById("start");
stopbutton = document.getElementById("stop");
resetbutton = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

function time() {
  seconds += 1;

  if (seconds == 60) {
    seconds = 0;
    minutes += 1;
  }

  if (minutes == 60) {
    minutes = 0;
    hours += 1;
  }

  let formattedSeconds = String(seconds).padStart(2, "0");
  let formattedMinutes = String(minutes).padStart(2, "0");
  let formattedHours = String(hours).padStart(2, "0");

  document.getElementById(
    "clock"
  ).textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function timerstart() {
  intervalId = setInterval(time, 1000);
}

function timerstop() {
  clearInterval(intervalId);
  intervalId = null;
}

function timerreset() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  let formattedSeconds = String(seconds).padStart(2, "0");
  let formattedMinutes = String(minutes).padStart(2, "0");
  let formattedHours = String(hours).padStart(2, "0");

  document.getElementById(
    "clock"
  ).textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

startbutton.addEventListener("click", timerstart);
stopbutton.addEventListener("click", timerstop);

resetbutton.addEventListener("click", timerreset);
