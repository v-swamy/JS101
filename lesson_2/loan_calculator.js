const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function formatInput(input) {
  if (input[0] === '$') {
    input = input.substring(1);
  }
  if (input.includes(',')) {
    input = input.replaceAll(',', '');
  }
  if (input.includes('%')) {
    input = input.replaceAll('%', '');
  }
  return input;
}

function invalidInput(input) {
  return input.trimStart() === ''
         || [-1, -0, 0, NaN].includes(Math.sign(Number(input)));
}

function calcPayment(loanAmount, monthlyRate, loanDuration) {
  let monthlyPayment = loanAmount * (monthlyRate /
                       (1 - ((1 + monthlyRate) ** (-loanDuration))));
  return monthlyPayment.toFixed(2);
}

prompt('Welcome to Loan Calculator 1.0!');

while (true) {
  prompt("Enter the amount of the loan. Must be a positive amount.\n" +
         "Note: amount will be rounded to 2 decimal places.");
  let loanAmount = formatInput(readline.question());

  while (invalidInput(loanAmount)) {
    prompt("Your loan amount is invalid. Please try again.");
    loanAmount = formatInput(readline.question());
  }

  loanAmount = Number(loanAmount).toFixed(2);

  prompt('Your loan amount is ' + loanAmount);

  prompt("Enter the duration of the loan in months (must be greater than 0).");
  let loanDuration = formatInput(readline.question());

  while (invalidInput(loanDuration)) {
    prompt("Your loan duration is invalid, please try again.");
    loanDuration = formatInput(readline.question());
  }

  loanDuration = Number(loanDuration);

  prompt(`Your loan duration is ${loanDuration} months.`);

  prompt("Enter the loan annual percentage rate (APR) (must be > 0).\n" +
         "Example: 2.8 for 2.8%, 5.25 for 5.25%");
  let apr = formatInput(readline.question());

  while (invalidInput(apr)) {
    prompt("Your APR is invalid, please try again.");
    apr = formatInput(readline.question());
  }

  prompt(`Your APR is ${apr}%.`);

  let monthlyRate = (Number(apr) / 100) / 12;

  let monthlyPayment = calcPayment(loanAmount, monthlyRate, loanDuration);

  prompt('Your monthly payment is $' + monthlyPayment + '.');

  prompt("Would you like to calculate another payment? Press 'y' to continue.");
  let answer = readline.question();

  if (answer !== 'y') {
    prompt('Goodbye!');
    break;
  }
}