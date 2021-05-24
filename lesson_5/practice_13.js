let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((arr1, arr2) => {
  let oddSum1 = arr1.reduce((accum, val) => {
    if (val % 2 === 1 ) {
      return accum + val;
    } else {
      return accum;
    }
  }, 0);

  let oddSum2 = arr2.reduce((accum, val) => {
    if (val % 2 === 1 ) {
      return accum + val;
    } else {
      return accum;
    }
  }, 0);

  return oddSum1 - oddSum2;
});

console.log(arr);