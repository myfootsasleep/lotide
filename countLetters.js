const countLetters = function(string1) {
  const newString = string1.replace(/\s/g, "");
  const result1 = {};
  for (let letters of newString) {
    if (result1[letters]) {
      result1[letters] += 1;
    } else {
      result1[letters] = 1;
    }
  }
  return result1;
};
module.exports = countLetters;
