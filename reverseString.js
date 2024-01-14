function reverseString(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    newString = string.charAt(i) + newString;
  }
  return newString;
}
module.exports = reverseString;
