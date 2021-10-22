//INPUT:  Ask user to enter integer > 0
//         Ask user to enter 's' or 'p' to compute sum or product
//OUT:  String with sum or product
//Calculate sum or product of all numbers between 1 and input number, inclusive

let readlineSync = require('readline-sync');

let num = Number(readlineSync.question('Please enter an integer greater than 0:  '));
let choice = readlineSync.question('Please enter "s" to compute the sum, or "p" to compute the product.  ');

if (choice === 's') {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
} else if (choice === 'p') {
  let product = 1;
  for (let i = 1; i <= num; i += 1) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${num} is ${product}.`);
}