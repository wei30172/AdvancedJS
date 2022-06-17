// https://www.youtube.com/watch?v=yBFHwJgqLD4&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=15

// Debounce
/*
At end of wait time
Interested in the final state
ex: We don't want to fire the API call until the user has stopped typing in the search input.
*/
const initApp = () => {
  const button = document.querySelector('button');
  // button.addEventListener('click', debounce(clickLog, 2000))
  button.addEventListener('click', () => {
    clickLog();
    button.disabled = true;
    setTimeout(() => button.disabled = false, 2000);
  })
  document.getElementById('filterText').addEventListener('input', debounce(e => console.log(e.target.value), 500))
}

const clickLog = () => {
  console.log(`clicked`);
}

const debounce = (fn, delay) => {
  let id;
  console.log(`id at immediate load: ${id}`);
  return (...args) => {
    console.log(`previous id: ${id}`);
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay)
  }
}

document.addEventListener("DOMContentLoaded", initApp);