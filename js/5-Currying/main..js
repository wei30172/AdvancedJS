// https://www.youtube.com/watch?v=I4MebkHvj8g&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=5

// Currying
// Currying takes a function that receives more than one parameter
// and breaks it into a series of functions that only receive one parameter

// Therefore, a curried function only takes one parameter at a time

const buildSandwish = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, and ${ingredient3}.`
    }
  }
}

// Refactor
const buildSandwish2 = ingredient1 => ingredient2 => ingredient3 => 
  `${ingredient1}, ${ingredient2}, and ${ingredient3}.`

const sandwish = (buildSandwish("Bacon")("Lettuce")("Tomato"));
const sandwish2 = (buildSandwish2("Turkey")("Cheese")("Bread"));

// console.log(sandwish); // Bacon, Lettuce, and Tomato.
// console.log(sandwish2); // Turkey, Cheese, and Bread.

// ==================
// partially applied functions
const multiply = (x, y) => x * y;
const curryMultiply = x => y => x * y;
// console.log(multiply(2, 3)); // 6
// console.log(curryMultiply(2)); // y => x * y // what it still needs
// console.log(curryMultiply(2)(3)) // 6

const timesTen = curryMultiply(10);
// console.log(timesTen); // y => x * y
// console.log(timesTen(8)); // 80

// ==================
// function composition: Allows calling small functions in a specific oredr
const addCustomer = fn => (...args) => {
  console.log('saving customer info...')
  return fn(...args);
}

const processOrder = fn => (...args) => {
  console.log(`processing order ${args[0]}`)
  return fn(...args);
}

let completeOrder = (...args) => {
  console.log(`Order ${[...args].toString()} completed.`)
}

completeOrder = processOrder(completeOrder);
// console.log(completeOrder);
// (...args) => {
//   console.log(`processing order #${args[0]}`)
//   return fn(...args);
// }

completeOrder = addCustomer(completeOrder);
// completeOrder(1000);
// saving customer info...
// processing order #1000
// Orrder #1000 completed.

function addCustomer2(...args) {
  return function processOrder2(...args) {
    return function completeOrder2(...args) {
      // end
    }
  }
}

// ==================
// Requires a function with a fixed number of parameters
const curry = (fn) => {
  console.log(fn.length); // 3
  return curried = (...args) => {
    console.log(fn.length); // 3 3 3
    if (fn.length !== args.length) {
      console.log(args); // [10] [10,20]
      return curried.bind(null, ...args); // bind create new function
    }
    return fn(...args);
  }
}

const total = (x, y, z) => x + y + z;
const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30)); // 60