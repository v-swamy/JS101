//INPUT - user input for room dimensions (both length and width) in meters
//OUTPUT - print string to console
//  Ask user for length of room in meters, save to variable
//  Ask user for width, save to vaiable
//  Print string with area of room in sq m and sq ft
//  No validation needed
//  Use readlineSync.prompt

const readline = require('readline-sync');

console.log('Enter the length of the room in meters:');
let length = Number(readline.prompt());

console.log('Enter the width of the room in meters:');
let width = Number(readline.prompt());

let area = length * width;

console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area * 10.7639).toFixed(2)} square feet).`);
