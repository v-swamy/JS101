function staggeredCase(string) {
  let wordsArray = string.split('');
  let capitalize = true;
  let result = wordsArray.map(char => {
    if (/[^a-z]/i.test(char) === true) {
      return char;
    } else if (capitalize) {
      capitalize = !capitalize;
      return char.toUpperCase();
    } else {
      capitalize = !capitalize;
      return char.toLowerCase();
    }
  });
  return result.join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);


staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"