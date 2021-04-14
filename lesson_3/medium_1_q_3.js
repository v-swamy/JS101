function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}


console.log(factors(0));
console.log(factors(30));

// function factors(number) {
//   if (number > 0) {
//     let divisor = number - 1;
//     let factors = [1, number];
//     while (divisor !== 1) {
//       if (number % divisor === 0) {
//         factors.push(number / divisor);
//       }
//       divisor -= 1;
//     }
//     return factors;
//   } else return 'Number must be > 0.';
// }

