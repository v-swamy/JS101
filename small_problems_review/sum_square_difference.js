// INPUT:  an integer (representing first n positive integers)
// OUTPUT:  an integer (square of sum minus sum of squares)
// DATA STRUCTURE:  Array
// ALGO:
//  - Create an array with 1 to n consecutive integers
//  - Calculate square sum
//  - Calculate sum of squares
//  - Return a - b

//  Create an array with 1 to consecutive integers
//  - Initialize empty array
//  - Use a for loop, 1 to n
//  - Push each element into empty array
//  - Return the array

function createIntArray(num) {
  let result = [];
  for (let idx = 1; idx <= num; idx +=1 ) {
    result.push(idx);
  }
  return result;
}

function sumSquareDifference(num) {
  let numArray = createIntArray(num);
  let squareSum = (numArray.reduce((accum, val) => accum + val)) ** 2;
  let sumSquares = numArray.reduce((accum, val) => accum + (val ** 2), 0);
  return squareSum - sumSquares;
}