function bubbleSort(array) {
  while (true) {
    let swap = false;
    for (let idx = 0; idx < array.length - 1; idx += 1) {
      if (array[idx] <= array[idx + 1]) {
        continue;
      } else {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        swap = true;
      }
    }
    if (!swap) break;
  }
}