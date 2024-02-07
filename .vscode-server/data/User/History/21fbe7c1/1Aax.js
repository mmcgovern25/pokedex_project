let countdown;
const timerDisplay = document.querySelector('.display__tume-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')
function timer(seconds) {
  const now = Date.new();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/ 1000);
    if(secondsLeft < 0) {
      clearInterval(countdown)
      return;
    }
  displayTimeLeft(secondsLeft);
  }, 1000);
}


function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds , 10 ? '0' : ''}${
    remainderSeconds}`;
    document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new DataTransfer(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour -12 : hour
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));