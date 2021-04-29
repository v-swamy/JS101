function wrapString(string, width) {
  let maxStringLength = width - 4;
  let stringArray = [];

  if (string.length <= maxStringLength) {
    stringArray.push(string);
  }
  let splitString = string.split(' ');
  
  let line = '';

  splitString.forEach((word, index) => {
    if (line.length + word.length < maxStringLength) {
      line += word + ' ';
    } else {
      stringArray.push(line);
      line = word + ' ';
    }

    if (index === splitString.length - 1) {
      stringArray.push(line);
    }
  });

  return padArray(stringArray, maxStringLength);

  // while (string.length > maxStringLength) {
  //   stringArray.push(string.slice(0, maxStringLength));
  //   string = string.slice(maxStringLength);
  // }
  // let padding = maxStringLength - string.length;
  // string = string.padStart(string.length + (padding / 2));
  // string = string.padEnd(string.length + (padding / 2));
  // stringArray.push(string);
  // return stringArray;
}

function padArray(stringArray, maxStringLength) {
  let paddedArray = stringArray.map(words => {
    if (words.length < maxStringLength) {
      let padding = maxStringLength - words.length;
      let paddedWords = words.padStart(words.length + (padding / 2));
      paddedWords = words.padEnd(words.length + (padding / 2));
      return paddedWords;
    } else return words;
  });
  return paddedArray;
}

function addVertBars(array) {
  let newArray = array.map(string => '| ' + string + ' |');
  return newArray;
}

function logInBox(string, width = string.length + 4) {
  let stringArray = addVertBars(wrapString(string, width));
  let dashedLine = '+' + '-'.repeat(width - 2) + '+';
  let emptyLine = '|' + ' '.repeat(width - 2) + '|';

  let finalArray = [dashedLine, emptyLine, ...stringArray,
    emptyLine, dashedLine];

  finalArray.forEach(string => console.log(string));

}

// function logInBox(string, width) {
//   if (width && string.length + 4 > width) {
//     string = string.slice(0, width - 4);
//   }
//   let length = string.length;
//   let row1 = '+' + '-'.repeat(length + 2) + '+\n';
//   let row2 = '|' + ' '.repeat(length + 2) + '|\n';
//   let row3 = '| ' + string + ' |\n';
//   let row4 = row2;
//   let row5 = row1;
//   console.log(row1 + row2 + row3 + row4 + row5);
// }

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('To boldly go where no one has gone before.', 20);


