// https://www.youtube.com/watch?v=1er63_Ki7MI&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=15

// Throttle
/*
At intervals
Considering the intermediate state
ex: User is scrolling the page of the web application and we want something to happen or update at a regular interval as it scrolls.
*/
const initApp = () => {
  const tbutton = document.querySelector('#throttle');
  // tbutton.addEventListener('click', clickLog);
  tbutton.addEventListener('click', throttle(clickLog, 2000));

  window.addEventListener('scroll', throttle(scrollLog, 200));
}

const clickLog = () => console.log(`click`);
const scrollLog = () => console.log(`scrolling`);

const throttle = (fn, delay) => {
  let lastTime = 0;
  console.log(`called Throttle immediately: ${lastTime}`);
  let id = 0;
  return (...args) => {
    const now = new Date().getTime();
    id++;
    if (now - lastTime < delay) return;
    lastTime = now;
    console.log(`event id: ${id}`);
    fn(...args);
  }
}

document.addEventListener("DOMContentLoaded", initApp);