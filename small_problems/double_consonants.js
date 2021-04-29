function doubleConsonants(string) {
  let array = string.split('');
  let regex = /[aeiou]|[^A-Z]/i;
  let result = array.map(char => {
    if (regex.test(char)) {
      return char;
    } else {
      return char + char;
    }
  });
  return result.join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""