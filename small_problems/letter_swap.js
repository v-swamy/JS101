function swap(string) {
  let array = string.split(' ');
  let swapArray = array.map(word => {
    let array = word.split('');
    let firstLetter = array[0];
    let lastLetter = array[array.length - 1];
    array[0] = lastLetter;
    array[array.length - 1] = firstLetter;
    return array.join('');
  });
  let swapString = swapArray.join(' ');
  return swapString;
}


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"