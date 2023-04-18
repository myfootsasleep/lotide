let without = function(arr1, arr2) {
  let copyArr = [...arr1];
  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
      if (arr1[i] === arr2[x]) {
        copyArr.splice(i, 1);
      }
    }
  }
  return copyArr;
};
module.exports = without;