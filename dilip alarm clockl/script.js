// function updateClock() {
//   const now = new Date();

//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();

//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   document.getElementById("time").textContent =
//     ${hours}:${minutes}:${seconds};

//   const options = { year: 'numeric', month: 'long', day: 'numeric' };
//   document.getElementById("date").textContent =
//     now.toLocaleDateString("ja-JP", options);
// }

// updateClock();
// setInterval(updateClock, 1000);
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // AM / PM logic
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  // Leading zeros
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("time").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("date").textContent =
    now.toLocaleDateString("ja-JP", options);
}

updateClock();
setInterval(updateClock, 1000);



// let stphour = 0;
// let stpminute = 0
// let stpsecond = 0;
// let stpmiliscd = 0;
// let timer = null
// let isrunning = false;

// const display = document.getElementById("display")

// const startbtn = document.getElementById("start")
// const stopbtn= document.getElementById("stop")
// const resetbtn = document.getElementById("reset")

// function runstopwatch (){
//   stpmiliscd += 10
//   if(stpmiliscd === 1000) {
//     stpmiliscd = 0;
//     stpsecond++;
//   }

//   if(stpsecond === 60){
//     stpsecond = 0;
//     stpminute++
//   }
//   if(stpminute === 60){
//     stpminute = 0;
//     stphour++
//   }
//   display.innerText= formatTime();
// }
// function formatTime(){
//   return(
//         ${pad(stphour)}: +
//     ${pad(stpminute)}: +
//     ${pad(stpsecond)}: +
//     ${pad(Math.floor(stpmiliscd / 10))}

//   )

//   function pad(num){
//     return num.toString().padStart(2, "0");

//   }
// }
// startBtn.addEventListener("click", () => {
//   if (!isRunning) {
//     timer = setInterval(runStopwatch, 10);
//     isRunning = true;
//   }
// });

// 

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("stop");

function runStopwatch() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  display.innerText = formatTime();
}

function formatTime() {
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(Math.floor(milliseconds / 10))}`;
}


function pad(num) {
  return num.toString().padStart(2, "0");
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(runStopwatch, 10);
    isRunning = true;
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  hours = minutes = seconds = milliseconds = 0;
  display.innerText = "00:00:00:00";
});