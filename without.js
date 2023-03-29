let eqArrays = function(arr1, arr2){
  let testResult = false
  if (arr1.length === arr2.length){
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

let without = function (arr1, arr2){
  let copyArr = [...arr1]
  for (i = 0; i < arr1.length; i++){
    //console.log(arr1[i])
    for (x = 0; x < arr2.length; x++){
      //console.log(arr2[x])
      if(arr1[i] === arr2[x]){
        //console.log(arr1[i])
        copyArr.splice(i, 1)
        //console.log(arr1)
      }
    }
  }
  return copyArr
}

//const words = ["hello", "world", "lighthouse"]
//console.log(array1)
//console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]))

//without([1,2,3],[1])
//console.log(without(["1", "2", "3"], [1, 2, "3"]))
const originalArray = ["hello", "world", "lighthouse"];
const newArray = without(originalArray, ["lighthouse"]); 
//console.log(without(originalArray, ["lighthouse"]))
// Make sure the original array was not altered by the without function
assertArraysEqual(originalArray, ["hello", "world", "lighthouse"]);
assertArraysEqual(newArray, ["hello", "world"]); 