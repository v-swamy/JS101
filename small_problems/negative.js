// function negative(number) {
//   if (Math.sign(number) === 1 || Math.sign(number) === 0) {
//     return -number;
//   } else {
//     return number;
//   }
// }

function negative(number) {
  return number >= 0 ? -number : number;
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0