// INPUT: String
// OUTPUT:  Object with three properties
// ALGO:
// - initialize lowercase, uppercase, neither variables to 0
// - split string into array of individual characters
// - use forEach
//    - if char === char.toLowerCase(), then add 1 to lowercase
//    - if char !=== char.toLowerCase(), then add 1 to uppercase
//    - else add 1 to neither
//    - reuturn the object (use toFixed(2), convert to String

// eslint-disable-next-line max-lines-per-function
function letterPercentages(string) {
  const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  let length = string.length;
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;

  let array = string.split('');

  array.forEach(char => {
    if (!LETTERS.includes(char.toLowerCase())) {
      neither += 1;
    } else if (char === char.toLowerCase()) {
      lowercase += 1;
    } else {
      uppercase += 1;
    }
  });

  return {
    lowercase: String(((lowercase / length) * 100).toFixed(2)),
    uppercase: String(((uppercase / length) * 100).toFixed(2)),
    neither: String(((neither / length) * 100).toFixed(2)),
  };
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }