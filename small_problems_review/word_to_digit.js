// INPUT: string (sentence)
// OUTPUT:  string (with number words converted to corresponding integer)
// DETAILS:  Number words from zero to 9
// DATA STRUCTURE:  Object (keys are number strings, value is number)
// ALGO:
//  - Initialize reference object
//  - Convert sentence to array (split with one space)
//  - Use map method to iterate through each element in array
//    - Check if object keys include the element
//      - If yes, return the corresponding object value
//      - If not, return the element
//  - Join the new array back into string
//  - Return the new array

// eslint-disable-next-line max-lines-per-function
function wordToDigit(sentence) {
  const NUMS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };

  let array = sentence.split(' ');

  let result = array.map(word => {
    if (word.endsWith('.')) {
      word = word.slice(0, -1);

      if (Object.keys(NUMS).includes(word.toLowerCase())) {
        return NUMS[word.toLowerCase()] + '.';
      } else {
        return word + '.';
      }
    }

    if (Object.keys(NUMS).includes(word.toLowerCase())) {
      return NUMS[word.toLowerCase()];
    } else {
      return word;
    }
  });

  result = result.join(' ');

  console.log(result);
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."