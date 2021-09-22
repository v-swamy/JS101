function fridayThe13ths(year) {
  let count = 0;
  for (let month = 0; month < 12; month += 1) {
    let dayOf13th = new Date(year, month, 13);
    if (dayOf13th.getDay() === 5) {
      count += 1;
    }
  }
  return count;
}