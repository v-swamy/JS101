//INPUT: 2 strings
//OUTPUT: short + long + short

function shortLongShort(string1, string2) {
  let arr = [string1, string2];
  arr.sort((str1, str2) => str1.length - str2.length);
  return arr[0] + arr[1] + arr[0];
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"