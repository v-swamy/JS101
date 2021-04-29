function centerOf(string) {
  if (string.length % 2 === 0) {
    return string.slice((string.length / 2) - 1, (string.length / 2) + 1);
  } else {
    return string[Math.floor(string.length / 2)];
  }
}


centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"