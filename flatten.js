let eqArrays = function(arr1, arr2){
  let testResult = false
  if (arr1.length == arr2.length){
    //console.log("true")
    for (let i = 0; i < arr1.length; i++){
      //console.log(arr1[i], arr2[i])
      if (arr1[i] !== arr2[i]){
        testResult = false
        return false
      }
      else{
        testResult = true
      }
    }
  }
  return testResult
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

let flatten = function (arr1){
  //console.log(arr1)
  let flatArray = []
  //console.log(arr1.length)
  for (i = 0; i < arr1.length; i++){
    //console.log(Array.isArray(arr1[i]))
    //flatArray.push(arr1[i])

    //console.log(flatArray)
    if(Array.isArray(arr1[i]) === true){
    for (x = 0; x < arr1[i].length; x++){
      //console.log(arr1[i][x])
      flatArray.push(arr1[i][x])
    }
    }
    else{
      flatArray.push(arr1[i])
    }
  }
  return flatArray
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])

//console.log(flatten(([1, 2, [3, 4,], 5, [6]])).length)

//let testing = ([1, 2, [3, 4], 5, [6]])
//console.log(testing[2])
