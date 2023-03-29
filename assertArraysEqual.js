let eqArrays = function(arr1, arr2){
  let testResult = false
  if (arr1.length === arr2.length){
    //console.log("true")
    for (let i = 0; i < arr1.length; i++){
      console.log(arr1[i], arr2[i])
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

assertArraysEqual([1,2,3],[1,2,3])
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);