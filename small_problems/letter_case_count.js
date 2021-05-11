function letterCaseCount(string) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };
  let charArray = string.split('');
  let regex = /[^a-z]/i;
  charArray.forEach(char => {
    if (regex.test(char)) {
      obj.neither += 1;
    } else if (char.toLowerCase() === char) {
      obj.lowercase += 1;
    } else {
      obj.uppercase += 1;
    }
  });
  return obj;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }


// INPUT: string
// OUTPUT: object with 3 properties -
//           1) # of lowercase letters
//           2) # of uppercase letters
//           3) # of others
// empty string should return object { lowercase: 0, uppercase: 0, neither: 0 }

// Split string into array of chars
// Declare initial object
// For each char -
//   Check if not a letter
//   If not a letter, increase neither by 1
//   If char.toLowerCase === char, increase lowercase by 1
//   Else increase uppercase by 1
// Return object