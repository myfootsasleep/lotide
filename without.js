const without = function(arr1, arr2) {
  const copyArr = [...arr1];
  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
      if (arr1[i] === arr2[x]) {
        copyArr.splice(i);
      }
    }
  }
  return copyArr;
};
module.exports = without;
