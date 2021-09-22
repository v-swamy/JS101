function findNb(m) {
  let counter = 1;
  debugger;
  while (m > 0) {
    m -= (counter ** 3);
    if (m === 0) {
      break;
    }

    counter += 1;
  }

  return m ? (-1) : counter;
}

findNb(4183059834009);