let letterPositions = function(sentence) {
  let result = {};
  let newString = sentence.replace(/\s/g, "");
  for (let i = 0; i < newString.length; i++) {
    console.log(newString[i]);
    if (result[newString[i]]) {
      result[newString[i]].push(i);
      //console.log("if")
    } else {
      result[newString[i]] = [i];
      //console.log("else")
    }
  }
  return result;
};
module.exports = letterPositions;