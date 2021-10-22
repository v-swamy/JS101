// INPUT: 3 numbers (representing sides of a triangle)
// OUTPUT:  String (4 possible)
// REQUIREMENTS:
//  - sum of two shortest sides must be greater than longest side
//  - every side must have length greater than 0
//  - if not, invalid
//  - if all sides same, equilateral
//  - if 2 sides same, isosceles
//  - if no sides same, scalene
//  DATA STRUCTURE:  Array
//  ALGO:
//  - put args into array
//  - sort the array from lowest to highest
//  - filter the list to find if any 0s, return invalid if so
//  - add first two elements, check if longer than 3rd, if not return invalid
//  - check if all sides are equal, if so return equilateral
//  - check if 2 sides are equal, if so, reutrn isosceles
//    - return scalene


// function triangle(side1, side2, side3) {
//   let sides = [side1, side2, side3].sort();
//   if (sides.filter(length => length <= 0).length !== 0) return 'invalid';
//   if (sides[0] + sides[1] < sides[2]) return 'invalid';

//   if (sides[0] === sides[1] && sides[1] === sides[2]) {
//     return ' equilateral';
//   }

//   if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]) {
//     return 'isosceles';
//   }

//   return 'scalene';
// }

// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"

// INPUT: 3 numbers (representing 3 angles)
// OUTPUT: String (one of 4 posible strings)
// REQUIREMENTS:
//  - sum of angles must be 180 (or it is invalid)
//  - every angle must be greater than 0 (or it is invalid)
//  - if it has a 90 degree angle, it is 'right'
//  - if one angle is greater than 90, it is 'obtuse'
//  - if all 3 angles are less than 90, it is 'acute'
//  - All inputs are integers
//  - All inputs are in degrees
// ALGO:
//  - add args to array
//  - use filter to check if all above 0, if not return 'invalid'
//  - use reduce to calculate sum, if !== 180 return 'invalid'
//  - use filter to check if any angles above 90, if so, return 'obtuse'
//  - use filter to check if any angles === 90, if so return 'right'
//  - else return 'acute'

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  if (angles.filter(angle => angle > 0).length !== 3) {
    return 'invalid';
  }

  if (angles.reduce((accum, val) => accum + val) !== 180) {
    return 'invalid';
  }

  if (angles.filter(angle => angle > 90).length > 0) {
    return 'obtuse';
  }

  if (angles.filter(angle => angle === 90).length > 0) {
    return 'right';
  }

  return 'acute';
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"