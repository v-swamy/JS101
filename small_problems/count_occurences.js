function countOccurrences(array) {
  let occurences = {};
  array.forEach(element => {
    if (occurences[element.toLowerCase()]) {
      occurences[element.toLowerCase()] += 1;
    } else {
      occurences[element.toLowerCase()] = 1;
    }
  });
  for (const property in occurences) {
    console.log(`${property} => ${occurences[property]}`);
  }
}


let vehicles = ['car', 'CAR', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2


