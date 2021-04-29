function union(...args) {
  let array = args.flat();
  return array.reduce((accum, currentVal) => {
    if (!accum.includes(currentVal)) {
      accum.push(currentVal);
    }
    return accum;
  }, []);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]