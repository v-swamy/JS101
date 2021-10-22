// INPUT: 2 numbers (number to modify, number of digits to rotate)
// OUTPUT: Number (rotated)
// REQUIREMENTS:
//  - Rotate the last 'count' digits
//
// ALGO:
//  - Convert number to string
//  - Find index of number to be rotated to end
//    - equivalent to length - count
//  - Return slice of first digits + digits after count + rotated digit
//(converted to number)
//

function rotateRightmostDigits(number, count) {
  let numString = String(number);
  let index = numString.length - count;

  let result = numString.slice(0, index)
              + numString.slice(index + 1)
              + numString[index];

  return Number(result);
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

//  INPUT: Number
//  OUTPUT:  Number
//  REQS:  Rotate one digit to left, then hold first digit, rotate remaining, etc.
//  ALGO:  Convert number to string
//      Initialize empty result string
//      Use for loop to run rotateRightMostDigits, from count = string.length to 1
//      Save string each time
//      Return string

function maxRotation(number) {
  let numString = String(number);

  for (let count = numString.length; count > 1; count -= 1) {
    numString = rotateRightmostDigits(numString, count);
  }

  return Number(numString);
}
