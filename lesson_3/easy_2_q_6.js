let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// let newArray = flintstones.reduce((accum, element) => {
//   return accum.concat(element);
// }, []);

// console.log(newArray);

let newArray = [];
flintstones.forEach(element => {
  newArray = newArray.concat(element);
});
console.log(newArray);