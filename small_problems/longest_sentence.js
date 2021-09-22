function longestSentence(string) {
  let sentences = string.split(/([.?!])/).map(element => element.trim());
  let longest;
  let length = 0;

  sentences.forEach((element, idx) => {
    if (element.split(' ').length > length) {
      longest = element + sentences[idx + 1];
      length = element.split(' ').length;
    }
  });

  console.log(longest);
  console.log(`\nThe longest sentence has ${length} words.`);
}
