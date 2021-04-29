let readline = require('readline-sync');
const NUM_TO_REQUEST = ['1st', '2nd', '3rd', '4th', '5th', 'last'];

let numArray = [];
for (let idx = 0; idx < 6; idx += 1) {
  let num = readline.question(`Enter the ${NUM_TO_REQUEST[idx]} number: `);
  numArray[idx] = num;
}

let lastNum = numArray.pop();
if (numArray.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${numArray}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${numArray}.`);
}
