function twice(number) {
  let numString = String(number);
  let length = numString.length;
  let half = length / 2;
  if (numString.slice(0, half) === numString.slice(half)) {
    return number;
  } else return number * 2;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676