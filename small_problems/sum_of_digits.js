function sum(num) {
  let digitsArray = String(num).split('');
  digitsArray = digitsArray.map(digit => Number(digit));
  return digitsArray.reduce((x, y) => x + y);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45