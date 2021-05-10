let statement = "The Flintstones Rock";
let chars = statement.split('');
let count = {};

chars.forEach(char => {
  if (Object.keys(count).includes(char)) {
    count[char] += 1;
  } else {
    count[char] = 1;
  }
});

console.log(count);