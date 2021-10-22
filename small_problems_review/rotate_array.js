// INPUT: Array
// OUTPUT:  Array
// REQUIREMENTS:
//  - Rotate array - move first element to end
//  - Do not modify original array
//  - If input is not array, return undefined
//  - If input is empty array, return empty array
//
// ALGO:
//  - Use Array.isArray() to check if arg is array, return undefined if not
//  - Slice array to copy original array
//  - Use shift to capture and remove first element
//  - Push the shifted element into the array
//  - Return the array
//


function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;

  let copy = array.slice();
  copy.push(copy.shift());
  return copy;
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]