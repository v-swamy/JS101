// INPUT:  2 arrays
// OUTPUT: 1 array, sorted in ascending order

// Neither argument will be empty array
// Output array is all possible products between number pairs in 2 arrays

// Initialize empty array (result)
// For each element in 1st array:
//   For each element in 2nd array:
//     Push product of 1st array element and 2nd array element into result
//     Repeat for each 2nd array element
//   Repeat for each element in 1st array
// Return result array, sorted

function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach(val1 => {
    arr2.forEach(val2 => {
      result.push(val1 * val2);
    });
  });
  return result.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]