function isBalanced(string) {
  let regex = /[()]/g;
  let matches = string.match(regex);
  if (!matches) return true;
  let count = 0;
  for (let idx = 0; idx < matches.length; idx += 1) {
    if (matches[idx] === '(') {
      count += 1;
    } else {
      count += -1;
    }
    if (count === -1) {
      return false;
    }
  }
  return count === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);