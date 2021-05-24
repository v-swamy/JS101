let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(array => {
  array.forEach(word => {
    let vowels = word.match(/[aeiou]/g);
    vowels.forEach(vowel => console.log(vowel));
  });
});