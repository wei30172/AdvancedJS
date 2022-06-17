// https://www.youtube.com/watch?v=1S8SBDhA7HA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=1

// Closure

// Nested (child) functions have access to the scope of their parent.

// w3c schools:　A closure is a function having access to the parent scope even,
// after the parent function has closed.

// A closure is created when we define a function, not when a function is executed.

// glabal scope
let x = 1;

const parentFunction = () => { // parent function scope
  // local scope
  let myValue = 2;
  console.log(x); // 1
  console.log(myValue); // 2

  const childFunction = () => {
    console.log(x+=5); // 6
    console.log(myValue+=1); // 3
  }

  childFunction();

  const childFunction2 = () => {
    console.log(x+=5); // 6
    console.log(myValue+=1); // 3
  }

  return childFunction2;
}

// parentFunction();
const result = parentFunction();
console.log(result);

result(); // x = 11, myValue = 4
result(); // x = 16, myValue = 5
result(); // x = 21, myValue = 6

console.log(x); // 21
// console.log(myValue); // Reference Error, private variable