let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) => b - a);
  }

  return subArr.slice().sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (b < a) {
      return -1;
    } else {
      return 0;
    }
  });
});

console.log(newArr);