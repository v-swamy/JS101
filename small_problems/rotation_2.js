// INPUT:  Number, digit to move (count)
// OUTPUT:  Number


function rotateRightmostDigits(number, count) {
  let numString = String(number);
  let firstDigits = numString.slice(0, numString.length - count);
  let rotatedDigit = numString[numString.length - count];
  let lastDigits = numString.slice(numString.length - count + 1);
  return Number(firstDigits + lastDigits + rotatedDigit);
}

function maxRotation(number) {
  let length = String(number).length;
  for (let digit = length; digit >= 1; digit -= 1) {
    number = rotateRightmostDigits(number, digit);
  }
  return number;
}

