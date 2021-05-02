function sequence(number) {
  if (number === 1) {
    return [1];
  } else {
    return [...sequence(number - 1), number];
  }
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
