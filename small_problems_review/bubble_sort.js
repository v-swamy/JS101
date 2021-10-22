// INPUT:  Array
// OUTPUT:  Array, sorted (return the original array)
// REQUIREMENTS:
//  - Array will contain at least 2 elements
// ALGO:
//  - Initialize a "swapped" variable to false
//  - Use do/while loop, if swapped is true
//  - Change swapped to false;
//  - Use a for loop, from index 0 to length - 1
//  - Compare current element and next element
//  - Switch if current is higher than 2nd
//  - Set swapped to true if swap occurs

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let idx = 0; idx < array.length - 1; idx += 1) {
      let first = array[idx];
      let second = array[idx + 1];
      if (first > second) {
        array[idx] = second;
        array[idx + 1] = first;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}