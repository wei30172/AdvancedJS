// https://www.youtube.com/watch?v=ILcu32Nkq_I&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=19

// innerHTML
// 2 reasons why do not use innerHTML:
// 1) performance - It has to re-parse and re-paint all the dom nodes inside the parent element every time
// 2) security - It's the possibility of cross-site scripting
/*
const initApp = async () => {
  const button1 = document.getElementById('1');
  button1.addEventListener('click', createParas1);

  const button2 = document.getElementById('2');
  button2.addEventListener('click', createParas2);
}

document.addEventListener("DOMContentLoaded", initApp);

const createParas1 = () => {
  const start = Date.now();

  const main = document.querySelector('main');

  let i = 0;
  while (i < 500) {
    main.innerHTML += `<p>My value is ${i}</>`;
    i++;
  }

  const duration = Date.now() - start;
  console.log(duration);
}

const createParas2 = () => {
  const start = Date.now();

  const main = document.querySelector('main');
  const fragment = document.createDocumentFragment();

  let i = 0;
  while (i < 500) {
    const p = document.createElement('p');
    p.textContent = `My value is ${i}`;
    fragment.append(p);
    i++;
  }

  main.append(fragment);

  const duration = Date.now() - start;
  console.log(duration);
}
*/

const initApp = async () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    processUserInput();
  })
}

document.addEventListener("DOMContentLoaded", initApp);

const processUserInput = () => {
  const rawData = document.querySelector('input').value;
  const cleanData = sanitizeInput(rawData);

  const h1 = document.querySelector('h1');
  // h1.innerHTML = rawData;
  h1.innerHTML = cleanData;
}

const sanitizeInput = (inputvalue) => {
  const div = document.createElement('div');
  div.textContent = inputvalue;
  return div.innerHTML;
}