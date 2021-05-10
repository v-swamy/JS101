function buyFruit(items) {
  const result = [];
  items.forEach(itemArray => {
    let expandedItems = [];
    expandedItems.length = itemArray[1];
    expandedItems.fill(itemArray[0]);
    result.push(...expandedItems);
  });
  return result;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]