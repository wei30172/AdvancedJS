// https://www.youtube.com/watch?v=1S8SBDhA7HA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=1
// https://www.youtube.com/watch?v=8GDk8sj0YgQ&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=8

// IIFE(Immediately Invoked Function Expresstion)

// Variation
// with anonymous arrow function inside:
(() => {
  // do stuff
})();

// with the function keyword:
(function () {
  // do stuff
})();

// with a function name (allows for recursion):
(function myIIFE() {
  num++;
  // console.log(num); // 1 2 3 4 5
  return num !==5 ? myIIFE(num) : console.log('finished!') // finished!
})(num = 0);

// ==================
// Reason 1) Dose not pollute the glabal object
// global
const x = "whatever";
const helloWorld = () => "Hello Word!";

// isolate declarations within the function
(() => {
  const x = "iife whatever";
  const helloWorld = () => "Hello IIFE!";
  // console.log(x); // iife whatever
  // console.log(helloWorld()); //Hello IIFE!
})()

// console.log(x); // whatever
// console.log(helloWorld()); //Hello Word!


// ==================
// Reason 2) Private Variable and Methods from Closure
const privateCounter = (() => {
  let counter = 0; // private variable
  // the only way that this variable can be accessed is through the lexical scope of the child function.
  console.log(`Initial value: ${counter}`); // Initial value: 0

  const credits = (num) => console.log(num); // 1 2 3
  return () => {counter++; credits(counter)}
})();

privateCounter();
privateCounter();
privateCounter();
// credits(3); // ReferenceError

const credits = ((num) => {
  let credits = num;
  // console.log(`Initial credits value: ${credits}`); // Initial credits value: 3

  return () => {
    credits-=1;
    if (credits > 0) console.log(`${credits} credits(s) remaining`)
    if (credits <= 0) console.log(`not enough credits`)
  }
})(num = 3)

credits(); // 2 credits(s) remaining
credits(); // 1 credits(s) remaining
credits(); // not enough credits

// ==================
// Reason 3) The Module Pattern
const Score = (() => {
  let count = 0;

  return {
    current: () => { return count },
    increment: () => { count++ },
    reset: () => { count = 0 }
  }
})()

Score.increment();
console.log(Score.current()); // 1
Score.increment();
console.log(Score.current()); // 2
Score.reset();
console.log(Score.current()); // 0

// The Revealing Pattern is a variation of the Module Pattern
const Game = (() => {
  let count = 0;

  // Methods are defined in the private name space
  const current = () => { return count };
  const increment = () => { count++ };
  const reset = () => { count = 0 };
  return { // we are using pointers instead of defining these methods right inside the return object
    current,
    increment,
    reset
  }
})()

Game.increment();
console.log(Game.current()); // 1

// Injecting a namespace object
((namespace) => {
  namespace.count = 0
  // we are using the function keyword so that we can use the keyword this inside of these methods
  namespace.current = function () { return `App count is ${this.count}` },
  namespace.increment = function () { this.count++ },
  namespace.reset = function () { this.count = 0 }

})(window.App = window.App || {});

App.increment();
console.log(App.current()); // App count is 1
