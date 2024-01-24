var timerInMiliSec = 0;
var timer;

var strt = document.querySelector("#start");
var pause = document.querySelector("#pause")
var reset =  document.querySelector("#reset")

strt.addEventListener("click", startTimer)

pause.addEventListener("click", pauseTimer)
reset.addEventListener("click", resetTimer)

function resetTimer() {
    clearInterval(timer)
    timerInMiliSec = 0;
    document.querySelector("#minutes").innerText = "00";
    document.querySelector("#seconds").innerText = "00";
    document.querySelector("#miliSeconds").innerText = "00";
    strt.disabled = false;
}

function pauseTimer() {
    clearInterval(timer);
    strt.disabled = false;
}

function startTimer() {
    timer = setInterval(() => {
        timerInMiliSec += 10;
        updateTimer(timerInMiliSec)    
    }, 10)

    strt.disabled = true;
}

function updateTimer(timerInMiliSec) {
    const sec = Math.floor(timerInMiliSec / 1000);
    const min = Math.floor(timerInMiliSec/60000);
    const miliSec = (timerInMiliSec % 1000)/10;
      
    document.querySelector("#minutes").innerText = min < 10 ? "0" + (min % 60) : (min % 60);
    document.querySelector("#seconds").innerText = sec < 10 ? "0" + (sec % 60) : (sec % 60) ;
    document.querySelector("#miliSeconds").innerText = miliSec;
}
