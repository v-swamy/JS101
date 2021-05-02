// function reverseWords(words) {
//   let wordsArray = words.split(' ');
//   wordsArray.forEach((word, idx) => {
//     if (word.length >= 5) {
//       wordsArray[idx] = word.split('').reverse().join('');
//     }
//   });
//   return wordsArray.join(' ');
// }

function reverseWords(words) {
  let wordsArray = words.split(' ');
  let reversedArray = wordsArray.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  });
  return reversedArray.join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"