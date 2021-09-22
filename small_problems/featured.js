
function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = nextOddSeven(number);

  do {
    if (digitsOccurOnce(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function digitsOccurOnce(number) {
  let digits = String(number).split('');
  let checkedDigits = [];

  for (let idx = 0; idx < digits.length; idx += 1) {
    let digit = digits[idx];
    if (checkedDigits.includes(digit)) {
      return false;
    }
    checkedDigits.push(digit);
  }

  return true;
}

function nextOddSeven(number) {
  do {
    number += 1;
  } while (number % 7 !== 0 || number % 2 === 0);

  return number;
}