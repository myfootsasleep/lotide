const flatten = function(arr1) {
  const flatArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) === true) {
      for (let x = 0; x < arr1[i].length; x++) {
        flatArray.push(arr1[i][x]);
      }
    } else {
      flatArray.push(arr1[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;