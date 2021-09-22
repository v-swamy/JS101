// function triangle(num) {
//   for (let idx = 0; idx <= num; idx += 1) {
//     console.log(' '.repeat(num - idx) + '*'.repeat(idx));
//   }
// }

// triangle(5);
// triangle(9);

// function triangle(side1, side2, side3) {
//   let sides = [side1, side2, side3];
//   sides.sort();

//   if (sides[0] + sides[1] <= sides[2]) {
//     return 'invalid';
//   }

//   if (sides[0] === sides[1] && sides[1] === sides[2]) {
//     return 'equilateral';
//   }

//   if (sides[0] === sides[1] ||
//       sides[0] === sides[2] ||
//       sides[1] === sides[2]) {
//     return 'isosceles';
//   }

//   return 'scalene';
// }

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  let sum = angles.reduce((accum, val) => accum + val);
  let allOverZero = angles.every(angle => angle > 0);

  if (sum !== 180 || !allOverZero) {
    return 'invalid';
  } else if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}
