function multiplicativeAverage(array) {
  let length = array.length;
  let result = array.reduce((accum, currentVal) => accum * currentVal);
  return (result / length).toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"