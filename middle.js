let eqArrays = function(arr1, arr2){
  let testResult = false
  if (arr1.length == 0 && arr2.length == 0){
    testResult = true
  }
  else if (arr1.length == arr2.length){
    //console.log("true")
    for (let i = 0; i < arr1.length; i++){
      //console.log(arr1[i], arr2[i])
      if (arr1[i] != arr2[i]){
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
  if (eqArrays(arr1, arr2) == true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

let middle = function (arr1){
  let midArr = []
  let middle = (Math.floor((arr1.length)/2))
  //console.log(Math.floor((arr1.length-1)/2))
  //console.log(((arr1.length-1)/2))
  if (Math.floor((arr1.length-1)/2) == 0){
  }
  else if (arr1.length % 2 === 1) {
    midArr = ([arr1[middle]])
  }
  else{
    midArr = ([arr1[middle-1], arr1[middle]])
  }
return midArr
}


assertArraysEqual((middle([1])), [])
//console.log(middle([1]).length)
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// let nani = []
// let huh = []

// let check = function(nani, huh){
//   if (nani === huh){
//     console.log("true")
//   }
//   else{
//     console.log("false")
//   }
// }

console.log(eqArrays([], []))
