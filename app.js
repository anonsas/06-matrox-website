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

  secondsEl.textContent = seconds;
  minutesEl.textContent = mins;
  hoursEl.textContent = hours;
  daysEl.textContent = days;
}

setInterval(() => {
  clockHandler();
}, 1000);

// Animation on Scroll (Progress Bars)
const progressBar1 = document.getElementById('bar-1');
const progressBar2 = document.getElementById('bar-2');
const progressBar3 = document.getElementById('bar-3');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;

  if (scrolled < 290) {
    progressBar1.style.animation = 'none';
    progressBar2.style.animation = 'none';
    progressBar3.style.animation = 'none';
  }
  if (scrolled > 390) {
    progressBar1.style.animation = 'loading 1.5s forwards';
  }
  if (scrolled > 440) {
    progressBar2.style.animation = 'loading 1.5s forwards';
  }
  if (scrolled > 490) {
    progressBar3.style.animation = 'loading 1.5s forwards';
  }
});
