// INPUT: integer (positive or negative or 0)
// OUTPUT:  boolean (true/false)

// Returns true if number absolute value is odd

function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true