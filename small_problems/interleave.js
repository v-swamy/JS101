function interleave(array1, array2) {
  let array1Copy = [...array1];
  let array2Copy = [...array2];
  let newArray = [];
  for (let num = 0; num < array1.length; num += 1) {
    newArray.push(array1Copy.shift());
    newArray.push(array2Copy.shift());
  }
  return newArray;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]