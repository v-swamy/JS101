// INPUT:  array of strings
// OUTPUT:  string (longest common prefix), or ''
// REQUIREMENTS:
//  - all inputs in lowercase letters
// ALGO:
//  - save the first string as variable
//  - initialize result to ''
//  - use a for loop, start from 1 to length of string
//    - var prefix = slice the string from 0 to index
//    - use for loop on input array
//      - if string startsWith prefix
//         - continue;
//      - else...
//        - break;
//    - if for loop completes, set result to prefix;
//  - return result;

function commonPrefix(array) {
  let firstString = array.sort((a, b) => a.length - b.length)[0];
  let result = "";

  for (let idx = 1; idx <= firstString.length; idx += 1) {
    let prefix = firstString.slice(0, idx);
    for (let string of array) {
      if (string.startsWith(prefix)) {
        continue;
      } else {
        return result;
      }
    }
    result = prefix;
  }
  return result;
}

// ALGO:
//  - let firstString = first element of sorted string array (shortest)
//  - let result = ''
//  - use for loop, from 1 to index, to capture each substring
//   - let prefix = slice (0, index)
//   - initiate for loop, for each string in original array
//      - if string.startsWith()
//        - continue
//      - if not, return result;
//   - result = prefix
//  - return result after original for loop