// function fibonacci(index) {
//   if (index === 1 || index === 2) {
//     return 1;
//   } else {
//     return fibonacci(index - 1) + fibonacci(index - 2);
//   }
// }

let memo = {};
function fibonacci(index) {
  if (index === 1 || index === 2) {
    return 1;
  } else if (memo[index]) {
    return memo[index];
  } else {
    memo[index] = fibonacci(index - 1) + fibonacci(index - 2);
    return memo[index];
  }
}

// function fibonacci(nth) {
//   let array = [];
//   for (let idx = 0; idx <= nth - 1; idx += 1) {
//     if (idx <= 1) {
//       array.push(1);
//     } else {
//       array[idx] = array[idx - 1] + array[idx - 2];
//     }
//   }
//   return array.pop();
// }

// 1
// 1
// 2
// 3
// 5
// 8
