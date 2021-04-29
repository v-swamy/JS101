const SUFFIX = ['th', 'st', 'nd', 'rd'];

function century(year) {
  let century = Math.ceil(year / 100);
  let centuryString = String(century);
  let lastTwoDigits = Number(centuryString.slice(-2));
  let lastDigit = Number(centuryString.slice(-1));
  if (lastTwoDigits > 4 && lastTwoDigits < 20) {
    return centuryString + 'th';
  } else {
    return centuryString + SUFFIX[lastDigit];
  }
}


century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

// 1st
// 2nd
// 3rd
// 4th
// 5th
// 6th
// 7th
// 8th
// 9th
// 10th
// 11th
// 12th
// 13th
// 14th
// 15th
// 16th
// 17th
// 18th
// 19th
// 20th
// 21st
// 22nd
// 23rd
// 24th
// 25th
// 26th
// 27th
// 28th
// 29th
// 30th
