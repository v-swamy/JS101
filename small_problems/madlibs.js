let readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adj = readline.question('Enter an adjective: ');
let adverb = readline.question('Enter an adverb: ');

let sentence1 = `I made an elaborate dinner, but the ${noun} ate it and then ${verb}ed it out!`;
let sentence2 = `The ${adj} man ran ${adverb} to the airport.`;

console.log(sentence1);
console.log(sentence2);
