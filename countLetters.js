let countLetters = function(string1) {
  //console.log(string1)
  let newString = string1.replace(/\s/g, "");
  let result1 = {};
  for (let letters of newString) {
    //console.log(letters)
    if (result1[letters]) {
      result1[letters] += 1;
    } else {
      result1[letters] = 1;
    }
  //console.log(JSON.stringify(result1))
  }
  console.log(JSON.stringify(result1));
  return result1;
};

module.exports = countLetters;
