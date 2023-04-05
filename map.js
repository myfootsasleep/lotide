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
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//const words = ["ground", "control", "to", "major", "tom"];
//const words = ["23", "zebra", "zolo", "hero", "blem"];
const words = [2, 3, 45,]

const map = function(array, callback){
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];
  for(let item of array){
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item))
    // console.log('---')
    results.push(callback(item));
  }
return results;
}
const results1 = map(words, word => word[0])

//console.log(results1)

//assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
// assertArraysEqual(results1, ['2', 'z', 'z', 'h', 'b'])
//assertArraysEqual(results1, [2, 3, 4])