function leadingSubstrings(string) {
  let result = [];
  for (let idx = 1; idx <= string.length; idx += 1) {
    result.push(string.substring(0, idx));
  }
  return result;
}

// function leadingSubstrings(string) {
//   let strArray = string.split('');
//   return strArray.map((_, idx, arr) => arr.slice(0, idx + 1).join(''));
//   // return strArray.reduce((accum, _, idx, arr) => {
//   //   return accum.concat(arr.slice(0, idx + 1).join(''));
//   // }, []);
// };

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//All Substrings

// Input - string
// Output - Array,all substrings

// function substrings(string) {
//   let result = [];
//   for (let idx = 0; idx < string.length; idx += 1 ) {
//     let row = string.substring(idx, string.length);
//     result.push(...leadingSubstrings(row));
//   }
//   return result;
// }

// console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

function substrings(string) {
  let strArray = string.split('');
  let result = strArray.map((_, idx) => {
    let row = strArray.slice(idx, string.length)
      .reduce((accum, _, idx, arr) => {
        return accum.concat(arr.slice(0, idx + 1).join(''));
      },[]);
    return row;
  });
  return [].concat(...result);
}

console.log(substrings('abcde'));