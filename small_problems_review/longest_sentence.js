// INPUT:  string (multiple sentences in one string)
// OUTPUT:  2 strings (the longest sentence, number of words)
// REQUIREMENTS:  
//  - sentences may end with ., !, or ?.
//  - any other punctuation counts as word
// ALGO:
//  - Split the string into an array, use regex for [.!?]
//    - Array will have elements consisting of sentences
//  - Use map on the array, split element into array (use single space as arg), save the new array
//  - set variable 'longest' to the first element
//  - use forEach, if subarray length is greater than longest, save it as longest

function longestSentence(text) {
  let sentences = text.split(/[?.!]/);
  let words = sentences.map(sentence => sentence.trim().split(' '));
  let longest = words[0];

  words.forEach(array => {
    if (array.length > longest.length) {
      longest = array;
    }
  });

  let index = text.indexOf(longest[longest.length - 1]);
  let punctuation = text[index + longest[longest.length - 1].length];

  console.log(longest.join(' ') + punctuation);
  console.log(`\nThe longest sentence has ${longest.length} words.`);
}