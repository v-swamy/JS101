let readline  = require('readline-sync');
const SQ_FT_PER_SQ_METER = 10.7639;

function prompt(message) {
  console.log(`=>${message}`);
}

prompt('Enter your unit of measure (m / f)');
let unit = readline.prompt();

prompt('Enter the length of the room:');
let length = readline.prompt();

prompt('Enter the width of the room:');
let width = readline.prompt();

let area = Number(length) * Number(width);

if (unit === 'm') {
  prompt(`The area of the room is ${area} square meters (${area * SQ_FT_PER_SQ_METER} square feet).`);
} else {
  prompt(`The area of the room is ${area} square feet (${area / SQ_FT_PER_SQ_METER} square meters).`);
}
