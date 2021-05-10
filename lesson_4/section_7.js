// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectFruit(produce) {
//   let fruits = {};
//   for (let item in produce) {
//     if (produce[item] === 'Fruit') {
//       fruits[item] = 'Fruit';
//     }
//   }
//   return fruits;
// }

// selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// function doubleNumbers(numbers) {
//   for (let idx = 0; idx < numbers.length; idx += 1) {
//     numbers[idx] *= 2;
//   }
//   return numbers;
// }

// function doubleOddIdxs(numbers) {
//   let doubled = [];
//   for (let idx = 0; idx < numbers.length; idx += 1) {
//     if (idx % 2 === 1) {
//       doubled[idx] = numbers[idx] * 2;
//     } else {
//       doubled[idx] = numbers[idx];
//     }
//   }
//   return doubled;
// }

function multiply(numbers, value) {
  let result = [];
  for (let idx = 0; idx < numbers.length; idx += 1) {
    result.push(numbers[idx] * value);
  }
  return result;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]