// https://www.youtube.com/watch?v=4Ej0LwjCDZQ&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=7

// Shallow and Deep copy

// Javascript Data Types: Primitive vs. Structural

/* Primitive:
  1) undefined
  2) Boolean
  3) Number
  4) String
  5) BigInt
  6) Symbal
*/

/* Structural:
  1) Object: (new) Object, Array, Map, Set, WeekMap, Date
  2) Function
*/

/* Primitive vs. Structural Data Types
Primitive data types pass Values
Structural data types pass references

Primitive data types are immutable
Reassignment is not the same as mutable
Structure data types contain mutable data

Shallow copy vs. Deep copy (Clones of dara structures)
Shallow copies still share references of nested structures
(which allows for mutation of the original data)
Object.freeze() creates a shallow freeze
Deep copies share no references
*/

// Value vs. Reference
// Primitive data types pass Values
let x = 2;
let y = x;
y += 1;
// console.log(y); // 3
// console.log(x); // 2

// Structural data types pass references
// like a pointer to where those values are, instead of passing the values themselves
let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
// console.log(yArray); // [1, 2, 3, 4]
// console.log(xArray ); // [1, 2, 3, 4]

// ==================
// Mutable vs. Immutable
// Primitives are immutable
let myName = "Claire";
myName[0] = "w" // not work!
// console.log(myName); // Claire

// Reassignment is not the same as mutable
myName = "David";
// console.log(myName); // David

//  Structures contain mutable data
yArray[0] = 9;
// console.log(yArray); // [9, 2, 3, 4]
// console.log(xArray); // [9, 2, 3, 4] share the same reference

// ==================
// Pure Functions require you to avoid mutating the data vs.
// Impure Functions that mutates the data
// We want to avoid side-effect when we create pure functions

// Notice: "const" does not make the array immutable
// We can't reassign the array, but we still can change the elements in the array.

// ==================
// Shallow copy vs. Deep copy
// Shallow copy
// 1) With the spread operater
const zArray = [...yArray, 10];
console.log(zArray); // [9, 2, 3, 4, 10]
console.log(yArray); // [9, 2, 3, 4]

console.log(xArray === yArray); // true
console.log(yArray === zArray); // false

// 2) With Object.assign()
const tArray = Object.assign([], zArray);
console.log(tArray); // [9, 2, 3, 4, 10]
console.log(zArray === tArray); // false

// !) But if there are nested arrays or objects...
// nested structural data types still share a reference when use shallow copy!
// Note: Array.from() and slice() create shallow copy
yArray.push([8, 9,10]);
const vArray = [...yArray];
vArray[4].push(5);
vArray.push(6);
console.log(vArray); // [9, 2, 3, 4, [8, 9, 10, 5], 6]
console.log(yArray); // [9, 2, 3, 4, [8, 9, 10, 5]]

// Object.freeze()
const scoreObj = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2}
}
Object.freeze(scoreObj);
scoreObj.first = 34;
console.log(scoreObj.first); // 44
scoreObj.third.a = 5;
console.log(scoreObj.third.a); // 5
// still mutates - it is a shallow freeze

// ==================
// Shallow copy vs. deep copy
// deep copy
// 1)one line Vanilla JS soiution
const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(scoreObj === newScoreObj); // false

// 2) Vanilla JS function
const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;
  const newObject = Array.isArray(obj)? [] : {}
  for (let key in obj){
    const value = obj[key];
    newObject[key] = deepClone(value);
  }
  return newObject;
}

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj === scoreObj); // false

const scoreArray = [1, 2, 3, 4]
const myScoreArray = deepClone(scoreArray);
console.log(myScoreArray === scoreArray); // false

// https://www.youtube.com/watch?v=ZXxahQS1PN8&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=8

// Pure Functions
/* Rule
1) The same input ALWAYS gives the same output
2) No side effects (no mutations!)
*/

/* Pros
1) clean code
2) easy to test
3) easy to debug
4) independent
5) utility functions
*/