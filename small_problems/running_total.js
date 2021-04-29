// function runningTotal(array) {
//   let runningTotal = [];
//   if (array.length) {
//     runningTotal[0] = array[0];
//     for (let idx = 1; idx < array.length; idx += 1) {
//       runningTotal[idx] = array[idx] + runningTotal[idx - 1];
//     }
//   }
//   return runningTotal;
// }


function runningTotal(array) {
  let sum = 0;
  let runningTotal = array.map(value => {
    sum += value;
    return sum;
  });
  return runningTotal;
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

