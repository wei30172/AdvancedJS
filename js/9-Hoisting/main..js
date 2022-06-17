// https://www.youtube.com/watch?v=_uTDzYyYz-U&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=10

// Hoisting
// It takes the function declarations and variable declarations and moves them to the top (in memory).

// console.log(x); // undefined
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError

var x = 5; // var x: declaration, x = 5: initialization
let y = 5;
const z = 5;

// ==================

// function declaration
stepOne(); // step one
// stepOne2(); // ReferenceError: Cannot access 'stepOne2' before initialization
// stepOne3(); // TypeError: stepOne3 is not a function

function stepOne() { // the declaration has been hoisted into memory
  console.log('step one');
}

const stepOne2 = function () { // const and let are never hoisted
  console.log('step one');
}

var stepOne3 = function () {
  console.log('step one');
}

// const stepOne2 = () => { // const and let are never hoisted
//   console.log('step one');
// }

// var stepOne3 = () => {
//   console.log('step one');
// }

// ==================

const initApp = () => {
  console.log(stepOne4); // () => { console.log('step one'); }
  stepOne4();
}

// initApp(); // ReferenceError
document.addEventListener("DOMContentLoaded", initApp);

const stepOne4 = () => {
  console.log('step one'); // step one
}
