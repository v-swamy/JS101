function wordCap(string) {
  let wordArray = string.split(' ');
  let capArray = wordArray.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
  return capArray.join(' ');
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'