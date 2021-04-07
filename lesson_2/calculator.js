// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let userContinue = true;

prompt(MESSAGES.welcome);

while (userContinue) {
  prompt(MESSAGES.number1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalid number']);
    number1 = readline.question();
  }

  prompt('What is the second number?');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalid number']);
    number2 = readline.question();
  }

  prompt(MESSAGES.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['invalid operation']);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}.`);

  prompt(MESSAGES.continue);
  let answer = readline.question();

  while (!['Y', 'N', 'y', 'n'].includes(answer)) {
    prompt(MESSAGES['invalid continue']);
    answer = readline.question();
  }

  if (answer === 'Y' || answer === 'y') {
    userContinue = true;
  } else {
    userContinue = false;
  }
}

