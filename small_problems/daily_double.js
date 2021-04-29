function crunch(string) {
  if (string) {
    let newString = string[0];
    for (let index = 1; index < string.length; index += 1) {
      if (string[index] !== string[index - 1]) {
        newString += string[index];
      }
    }
    return newString;
  }
  return string;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""