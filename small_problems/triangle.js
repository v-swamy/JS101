function triangle(num) {
  for (let idx = 0; idx <= num; idx += 1) {
    console.log(' '.repeat(num - idx) + '*'.repeat(idx));
  }
}

triangle(5);
triangle(9);