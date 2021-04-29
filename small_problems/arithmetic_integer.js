let readline = require('readline-sync');

const OPERATIONS = {
  '+': function(x,y) {return x + y},
  '-': function(x,y) {return x - y},
  '*': function(x,y) {return x * y},
  '/': function(x,y) {return x / y},
  '%': function(x,y) {return x % y},
  '**': function(x,y) {return x ** y},
};

function prompt(message) {
  console.log(`==> ${message}`);
}

prompt('Enter the first number:');
let num1 = Number(readline.prompt());

prompt('Enter the second number:');
let num2 = Number(readline.prompt());

for (const operation in OPERATIONS) {
  prompt(`${num1} ${operation} ${num2} = ${OPERATIONS[operation](num1, num2)}`);
}
