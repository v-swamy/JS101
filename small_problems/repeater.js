function repeater(string) {
  let newString = '';
  for (let idx = 0; idx < string.length; idx += 1 ) {
    newString += string[idx] + string[idx];
  }
  return newString;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""