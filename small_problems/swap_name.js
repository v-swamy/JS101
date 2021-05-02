// function swapName(name) {
//   let nameArray = name.split(' ');
//   return `${nameArray[1]}, ${nameArray[0]}`;
// }

function swapName(name) {
  let nameArray = name.split(' ');
  let lastName = nameArray.pop();
  return [lastName, nameArray.join(' ')].join(', ');
}

swapName('Joe Roberts');    // "Roberts, Joe"