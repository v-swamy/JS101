function cleanUp(string) {
  const regex = /[^a-z]+/gi;
  let cleanedString = string.replace(regex, ' ');
  return cleanedString;
}


cleanUp("---what's my +*& line?");    // " what s my line "