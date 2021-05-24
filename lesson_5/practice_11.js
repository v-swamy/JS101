let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  let newObj = Object.assign({}, obj);
  for (let prop in newObj) {
    newObj[prop] += 1;
  }
  return newObj;
});

console.log(newArr);