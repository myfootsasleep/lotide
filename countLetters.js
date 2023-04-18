let countLetters = function(string1) {
  let newString = string1.replace(/\s/g, "");
  let result1 = {};
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
