let readline = require('readline-sync');

let age = readline.question('What is your age? ');
let retireAge = readline.question('At what age would you like to retire? ');
let diff = Number(retireAge) - Number(age);
let today = new Date();
let year = today.getFullYear();


console.log(`It's ${year}. You will retire in ${year + diff}.`);
console.log(`You have only ${diff} years of work to go!`);
