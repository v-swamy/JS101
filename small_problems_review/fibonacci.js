// INPUT: number (nth fibonnaci number)
// OUTPUT:  number (the fibonnaci number)
//
// REQUIREMENTS:
//  - Nth number = fibonnaci(n - 1) + fib(n - 2)
//  - F(1) = 1
//  - F(2) = 1
//  - F(n) = F(n - 1) + F(n - 2) where n > 2
//

function fibonacci(n, cache) {
  cache = cache || [1, 1];

  if (!cache[n - 1]) {
    cache.push(fibonacci(n - 1, cache) + fibonacci(n - 2, cache));
  }

  return cache[n - 1];

}


// function fibonacci(n) {
//   if (n <= 2) return 1;

//   let first = 1;
//   let second = 1;
//   let sum = 0;
//   for (let num = 3; num <= n; num += 1) {
//     sum = first + second;
//     first = second;
//     second = sum;
//   }

//   return sum;

// }