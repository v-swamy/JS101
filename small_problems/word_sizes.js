// split array
// initialize empty object
// for each in split array
//  SET length = String(value.length);
//  if object.keys includes length
//    object.length += 1;
//  else object.length = 1;
//  return object

function wordSizes(string) {
  let count = {};
  if (!string) {
    return count;
  }
  string = string.replace(/[^A-Za-z\s]/g, '');
  let array = string.split(' ');
  array.forEach(word => {
    let length = String(word.length);
    if (Object.keys(count).includes(length)) {
      count[length] += 1;
    } else {
      count[length] = 1;
    }
  });
  return count;
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}