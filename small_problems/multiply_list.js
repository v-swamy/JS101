function multiplyList(array1, array2) {
  let result = [];
  for (let idx = 0; idx < array1.length; idx += 1) {
    result[idx] = array1[idx] * array2[idx];
  }
  return result;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]