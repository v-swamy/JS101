function sumOfSums(array) {
  let result = [];
  for (let idx = 1; idx <= array.length; idx += 1) {
    result.push(...array.slice(0, idx));
  }
  return result.reduce((a, b) => a + b);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35