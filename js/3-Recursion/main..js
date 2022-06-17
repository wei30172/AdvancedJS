// https://www.youtube.com/watch?v=Q0alTGQ-lXk&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=3

// Recursion

// Recursion occurs when a function calls itself.
// Any iterator function (function with a loop) can be recursive instead.

// iterator function
const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
}

// countToTen();

// recursion functions have 2 parts:
// 1) the recursive call to the function
// 2) at leat one condition to exit
const recurToTen = (num = 1) => {
  if (num > 10) return;
  console.log(num); // 1 2 3 4 5 6 7 8 9 10
  num++;
  recurToTen(num);
}

// recurToTen();

// ==================
// The Standard Example: The Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
// Without Recursion:
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
}
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// With Recursion:
const fib = (num, array = [0, 1]) => {
  if (num <= 2) return array
  const [nextToLast, last] = array.slice(-2);
  return fib (num - 1, [...array, nextToLast + last]);
}
console.log(fib(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// ==================
// What number is in the nth position of the Fibonacci Sequence?
// Without Recursion:

const fibonacciPos = (pos) => {
  if (pos < 2) return pos;
  const array = [0, 1];
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
  }
  return array[pos];
}
console.log(fibonacciPos(8)); // 21

// With Recursion:
const fibPos = (pos) => {
  if (pos < 2) return pos;
  return fibPos(pos - 1) + fibPos(pos - 2);
}

// Same function in one line
//const fibPos = pos => pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2);

// console.log(fibPos(8)); // 21

// ==================
// Real-Life Examples: 
// 1) Continuation Token from an API (AWS S3)
const getAWSProductIdImages = async () => {

  // get the data with await fetch request

  if (data.IsTruncated) {
      //recursive
      return await getAWSProductIdImages(
        productId,
        s3, // connection to s3
        resultArray, // accumulator
        data.NextContinuationToken
      );
  }

  return resultArray;
}
// 2) A Parser:
// a company directory
// a file directory 
// the DOM - a web crawler
// An XML or JSON data export

// JSON data export
// Export from your streaming service like Spotify, YT Music, etc.
const artistsByGenre = {
  jazz: ["Miles Davis", "John Coltrane"],
  rock: {
      classic: ["Bob Seger", "The Eagles"],
      hair: ["Def Leppard", "Whitesnake", "Poison"],
      alt: {
          classic: ["Pearl Jam", "The Killers"],
          current: ["Joywave", "Sir Sly"]
      }
  },
  unclassified: {
      new: ["Caamp", "Neil Young"],
      classic: ["Seal", "Morcheeba", "Chris Stapleton"]
  }
}


const getArtistNames = (dataObj, arr = []) => {
  Object.keys(dataObj).forEach(key => {
      if (Array.isArray(dataObj[key])) {
          return dataObj[key].forEach(artist => {
              arr.push(artist);
          });
      }
      getArtistNames(dataObj[key], arr);
  });
  return arr;
}
//console.log(getArtistNames(artistsByGenre));