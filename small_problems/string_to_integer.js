function stringToInteger(string) {
  let numberArray = string.split('');
  let length = numberArray.length;
  return numberArray.reduce((sum, number, index) => {
    return sum + (number * (10 ** (length - index - 1)));
  }, 0);
}

function stringToSignedInteger(string) {
  if (string[0] === '+') {
    return stringToInteger(string.slice(1));
  } else if (string[0] === '-') {
    return -stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true