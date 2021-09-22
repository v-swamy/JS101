function sumSquareDifference(count) {
  let array = [];

  for (let num = 1; num <= count; num += 1) {
    array.push(num);
  }

  let squareOfSum = array.reduce((accum, val) => accum + val) ** 2;
  let sumOfSquares = array.reduce((accum, val) => accum + (val ** 2), 0);

  return squareOfSum - sumOfSquares;
}

// 1) get square of sum of first count positive integers

// make the Array