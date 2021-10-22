//INPUT: array of integers (positive or negative)
//OUTPUT: integer (representing an index)
//REQUIREMENTS:
//  - sum of integers to left of index === sum of integers right of index
//  - if no index exists, return -1
//  - integer at index is omitted from the sums
//ALGO:
//  - use for loop to iterate through indexes in given array
//    - create left and right arrays using slice;
//    - use reduce to sum left and right arrays;
//    - if sums are equal, return the index
//  - return -1 at the end if for loop terminates

function findEvenIndex(array) {
  for (let idx = 0; idx < array.length; idx += 1) {
    let leftArr = array.slice(0, idx);
    let rightArr = array.slice(idx + 1);

    let leftSum = leftArr.reduce((accum, val) => accum + val, 0);
    let rightSum = rightArr.reduce((accum, val) => accum + val, 0);

    if (leftSum === rightSum) {
      return idx;
    }
  }
  return -1;
}


console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([20,10,30,10,10,15,35]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));
console.log(findEvenIndex([10,-80,10,10,15,35,20]));
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]));