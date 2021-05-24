let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let info = Object.values(munsters);

let totalMaleAge = 0;

info.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});

console.log(totalMaleAge);