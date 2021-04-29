// start with first Fib number
// calculate additional numbers and track the index
// convert each number to string, compare length to digits arg
// if number.length === arg, return index

function fibonacci(index) {
  if (index === 1n || index === 2n) {
    return 1n;
  } else {
    return fibonacci(index - 1n) + fibonacci(index - 2n);
  }
}

function findFibonacciIndexByLength(length) {
  let index = 1n;
  while (String(fibonacci(index)).length < length) {
    index += 1n;
  }
  return index;
}

// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.