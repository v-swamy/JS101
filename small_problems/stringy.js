function stringy(num) {
  let string = '1';
  let nextDigit = '0';
  for (let count = 2; count <= num; count += 1 ) {
    string += nextDigit;
    nextDigit = nextDigit === '0' ? '1' : '0';
  }
  return string;
}