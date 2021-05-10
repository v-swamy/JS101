let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function createObj(array) {
  let obj = {};
  array.forEach((element, idx) => {
    obj[element] = idx;
  });
  return obj;
}

createObj(flintstones);