function isPalindrome(string) {
  // let wordArray = word.split('');
  // let reversedArray = wordArray.slice().reverse();
  // let length = wordArray.length;
  // let isPalindrome;
  // for (let idx = 0; idx < length; idx += 1) {
  //   if (wordArray[idx] !== reversedArray[idx]) {
  //     isPalindrome = false;
  //     break;
  //   } else {
  //     isPalindrome = true;
  //   }
  // }
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/\W/g, '');
  return isPalindrome(string);
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false