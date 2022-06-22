const secondsEl = document.getElementById('seconds');
const minutesEl = document.getElementById('minutes');
const hoursEl = document.getElementById('hours');
const daysEl = document.getElementById('days');

function clockHandler() {
  const newYear = new Date(2022, 11, 31, 23, 59, 59);
  const now = new Date();

  const difference = newYear.getTime() - now.getTime();
  const seconds = Math.floor((difference / 1000) % 60);
  const mins = Math.floor((difference / 1000 / 60) % 60);
  const hours = Math.floor((difference / 1000 / 60 / 60) % 24) - 1;
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);

  console.log(days, hours, mins, seconds);

  secondsEl.textContent = seconds;
  minutesEl.textContent = mins;
  hoursEl.textContent = hours;
  daysEl.textContent = days;
}

setInterval(() => {
  clockHandler();
}, 1000);
