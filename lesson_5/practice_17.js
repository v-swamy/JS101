function createUUID() {
  const HEX_CHARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  function createString(length) {
    let string = '';
    for (let idx = 0; idx < length; idx += 1) {
      string += HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
    }
    return string;
  }

  return `${createString(8)}-${createString(4)}-${createString(4)}-${createString(4)}-${createString(12)}`;
}