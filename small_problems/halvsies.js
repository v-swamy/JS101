function halvsies(array) {
  let secondHalf = array.slice();
  let firstHalf = [];
  while (firstHalf.length < secondHalf.length) {
    firstHalf.push(secondHalf.shift());
  }
  return [firstHalf, secondHalf];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]