//INPUT: Prompt user (bill amount & tip rate, both numbers)
//OUTPUT:  Print tip and total bill to console
//No input validation needed

let readlineSync = require('readline-sync');

let bill = Number(readlineSync.question('What is the bill?  '));
let tipPercent = Number(readlineSync.question('What is the tip percentage?  '));

let tipAmount = bill * (tipPercent / 100);
let total = bill + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

