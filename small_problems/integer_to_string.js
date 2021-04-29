const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let string = '';
  do {
    let digit = number % 10;
    string = DIGITS[digit] + string;
    number = Math.floor(number / 10);
  } while (number !== 0);
  return string;
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case 1:
      return '+' + integerToString(number);
    case -1:
      return '-' + integerToString(-number);
    default:
      return integerToString(number);
  }
}


console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
