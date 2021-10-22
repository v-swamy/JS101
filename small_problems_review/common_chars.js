//INPUT:  Array of strings
//OUTPUT:  Array of characters present in all strings (including duplicates)

//Sort strings by length to find shortest string
//Use map to split each string in array into individual character arrays
//Initialize result array
//Iterate over shortest character array
// eslint-disable-next-line max-len
// Filter all character arrays into new array (use includes to check if char is present)
//    If filteredArray length is same as chacterArrays length
//      Use indexOf to splice each char out
//      Save character to result array
//
//Return result array


function commonChars(strArray) {
  strArray.sort((a, b) => a.length - b.length);
  let charArrays = strArray.map(string => string.split(''));
  let result = [];

  let shortStr = charArrays[0].slice();

  shortStr.forEach(char => {
    let filteredCharArrays = charArrays.filter(arr => arr.includes(char));
    if (filteredCharArrays.length === charArrays.length) {
      charArrays.forEach(arr => arr.splice(arr.indexOf(char), 1));
      result.push(char);
    }
  });

  return result;
}

console.log(commonChars(["bella", "label", "roller"])); // ["e", "l", "l"]
console.log(commonChars(['ab', 'bc']));
console.log(commonChars(['a', 'b']));
console.log(commonChars(['cool', 'lock', 'cook']));
console.log(commonChars(['hello', 'goodbye', 'booya', 'random']));


