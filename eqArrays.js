const eqArrays = function(arr1, arr2) {
  let testResult = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        testResult = false;
        return false;
      } else {
        testResult = true;
      }
    }
  }
  return testResult;
};

module.exports = eqArrays;