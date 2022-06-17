// https://www.youtube.com/watch?v=TWUV_LRVX24&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=18

// Memoize: trading memory for speeding
// A memoize decorator function 

const multiplyBy10 = (num) => {
  return num * 10
}

// console.log(multiplyBy10(10));
// console.log(multiplyBy10(10));
// console.log(multiplyBy10(10));

const memoizedMultiplyBy10 = () => {
  let cache = {};
  return (num) => {
    if (num in cache) {
      return cache[num]
    }
    const result = num * 10;
    cache[num] = result;
    return result;
  }
}

let multiplyBy10Fn = memoizedMultiplyBy10();
// console.log(multiplyBy10Fn(10));
// console.log(multiplyBy10Fn(10));
// console.log(multiplyBy10Fn(10));

// ==================
const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    if (args.toString() in cache) {
        // if you want to verify result comes from cache
        console.log(cache); 
        return cache[args.toString()];
    }
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  }
}


multiplyBy10Fn = memoize(multiplyBy10);
// console.log(multiplyBy10Fn(10));
// console.log(multiplyBy10Fn(10));
// console.log(multiplyBy10Fn(10));

const add3 = (num1, num2, num3) => {
  return num1 + num2 + num3
}

let memoizedAdd3 = memoize(add3);
// console.log(memoizedAdd3(10, 2, 6));
// console.log(memoizedAdd3(10, 2, 6));
// console.log(memoizedAdd3(1, 5, 8));

const addMany = (...args) => {
  return args.reduce((acc, num) => acc + num);
}

let memoizedAddMany = memoize(addMany);
// console.log(memoizedAddMany(1, 2 ,3 ,4 ,5));
// console.log(memoizedAddMany(1, 2 ,3 ,4 ,5));
// console.log(memoizedAddMany(6, 7, 8));

// ==================
const fib = (num) => {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}

let memoizedFib = memoize(fib);
// console.log(memoizedFib(20));
// console.log(memoizedFib(20));
// console.log(memoizedFib(20));