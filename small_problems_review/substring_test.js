// INPUT:  Two strings
// OUTPUT:  Boolean
// REQUIREMENTS:
//    - Find if there is a substring that appears in both strings
//        - Return true if found
//        - Substrings are longer than 1 char
// CODE:
//  Create array of substrings for each given string
//    - Separate helper function?
//    - For each item in array 1, check if array 2 includes it
//      - if included, return true
//    - Return false after loop is concluded
//
//  generateSubstrings function:
//    - initialize empty array to hold subsstrings
//    - for each character in string, from index 0 to length - 2
//      - for each character in string, from index 1 to length
//          - slice the string from index1 to index2
//          - add to substrings array
//    - return substrings array
//

function generateSubstrings(string) {
  let substrings = [];

  for (let start = 0; start < string.length - 1; start += 1) {
    for (let end = start + 2; end <= string.length; end += 1) {
      let substring = string.slice(start, end);
      substrings.push(substring.toLowerCase());
    }
  }
  return substrings;
}

function substringTest(string1, string2) {
  let substr1 = generateSubstrings(string1);
  let substr2 = generateSubstrings(string2);

  for (let idx = 0; idx < substr1.length; idx += 1) {
    if (substr2.includes(substr1[idx])) {
      return true;
    }
  }
  return false;
}

console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') ===  true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('Something', '') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', '111t') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);
console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') === true);
