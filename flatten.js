let flatten = function(arr1) {
  //console.log(arr1)
  let flatArray = [];
  //console.log(arr1.length)
  for (let i = 0; i < arr1.length; i++) {
    //console.log(Array.isArray(arr1[i]))
    //flatArray.push(arr1[i])

    //console.log(flatArray)
    if (Array.isArray(arr1[i]) === true) {
      for (let x = 0; x < arr1[i].length; x++) {
      //console.log(arr1[i][x])
        flatArray.push(arr1[i][x]);
      }
    } else {
      flatArray.push(arr1[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;
