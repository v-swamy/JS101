let readline = require('readline-sync');

let number = Number(readline.question('Please enter an integer greater than 0: '));

let choice = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

function calculateSum(number) {
  let result = 0;
  for (let counter = 1; counter <= number; counter += 1) {
    result += counter;
  }
  return result;
}

function calculateProduct(number) {
  let result = 1;
  for (let counter = 1; counter <= number; counter += 1) {
    result *= counter;
  }
  return result;
}

if (choice === 's') {
  console.log(`The sum of the integers between 1 and ${number} is ${calculateSum(number)}.`);
} else {
  console.log(`The product of the integers between 1 and ${number} is ${calculateProduct(number)}.`);
}
