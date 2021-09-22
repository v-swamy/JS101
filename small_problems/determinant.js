function determinant(m) {
  // return the determinant of the matrix passed in
  if (m.length === 1) {
    return m[0][0];
  }
  
  if (m.length === 2) {
    return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]);
  }
  
  let firstRow = m[0];
  
  debugger;

  return m.reduce((prev, next, index) => {
    let minor = [];
    m.forEach(row => {
      minor.push(row.filter((_, idx) => idx !== index));
      });
    minor.shift();
    if (index % 2 === 0) {
      return prev + (firstRow[index] * determinant(minor));
    } else {
      return prev - (firstRow[index] * determinant(minor));
    }      
  }, 0)
};

let m2 = [ [2,5,3], [1,-2,-1], [1, 3, 4]];
console.log(determinant(m2));