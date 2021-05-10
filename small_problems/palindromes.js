
function palindromes(string) {
  let substrArray = substrings(string);
  let palidromes = substrArray.filter(substring => substring.length > 1 &&
    substring === substring.split('').reverse().join(''));
  return palidromes;
}

function substrings(string) {
  let strArray = string.split('');
  let result = strArray.map((_, idx) => {
    let row = strArray.slice(idx, string.length)
      .reduce((accum, _, idx, arr) => {
        return accum.concat(arr.slice(0, idx + 1).join(''));
      },[]);
    return row;
  });
  return [].concat(...result);
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]