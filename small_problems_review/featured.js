// INPUT:  number
// OUTPUT:  number
// REQUIREMENTS:
//    - returns next featured number greater than given integer
//    - if does not exist, return error
//    - featured number is multiple of 7, odd, and all digits occur only once each
//      - 49 is featured, 98 is not (not odd)
//        - 97 is not (not multiple of 7), 133 is not (3 appears 2x)
//     - largest possible is 9876543201
//  ALGO:
//  - start with while loop that increases by 1 until number is divisble by 7 and odd
//  - use another while loop with condition that number is less than max
//    - in the loop, initialize an empty array
//    - convert the number to string, then split into array
//    - use for loop
//      - push each element into empty array, pop from number array
//      - use includes method to check if number array includes anything from result array
//        - if included, break;
//          - if not, return the number
//        - at end of while loop, add 7

function featured(num) {
  while (num % 7 !== 0 || num % 2 !== 1) {
    num += 1;
  }

  while (true) {
    if (num % 2 === 1 && num <= 9876543201 &&
      validDigits(num)) {
      return num;
    } else {
      num += 7;
    }

    if (num > 9876543201) {
      return "There is no possible number that fulfills those requirements.";
    }
  }
}

function validDigits(num) {
  let numArray = String(num).split('');
  let checked = [];
  let length = numArray.length;
  for (let idx = 0; idx < length; idx += 1) {
    let element = numArray.pop();
    if (checked.includes(element)) {
      return false;
    } else {
      checked.push(element);
    }
  }
  return true;
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// featured(9876543200);   // 9876543201
//// featured(9876543201);   // "There is no possible number that fulfills those requirements