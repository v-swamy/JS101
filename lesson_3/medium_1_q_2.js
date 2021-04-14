let munstersDescription = "The Munsters are creepy and spooky.";
let letters = munstersDescription.split('');

let newString = letters.map(letter => {
  return letter === letter.toUpperCase() ?
    letter.toLowerCase() : letter.toUpperCase();
}).join('');

console.log(newString);