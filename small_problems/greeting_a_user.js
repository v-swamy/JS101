let readline = require('readline-sync');

let name = readline.question('What is your name? ');
console.log(!name.includes('!') ? `Hello ${name}.` :
  `HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);