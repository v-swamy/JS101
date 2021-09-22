// INPUT:  Array
// OUTPUT: New Array

// Do not modify existing Array

// If input is not Array, return undefined

// If input is empty Array, return empty Array


function rotateArray(array) {
  if (Array.isArray(array)) {
    if (array.length === 0) {
      return [];
    }
    let rotatedArray = array.slice();
    rotatedArray.push(rotatedArray.shift());
    return rotatedArray;
  } else {
    return undefined;
  }
}