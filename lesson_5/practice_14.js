let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let result = [];

let values = Object.values(obj);

values.forEach(food => {
  if (food.type === 'fruit') {
    result.push(food.colors.map(color => {
      return color.slice(0, 1).toUpperCase() + color.slice(1);
    }));
  } else {
    result.push(food.size.toUpperCase());
  }
});

console.log(result);