const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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


let eqObjects = function(object1, object2){
  
  if (Object.keys(object1).length === Object.keys(object2).length){
   for (let x of Object.keys(object1)){
    if (object1[x] !== object2[x]){
      return false
    }
   }
   
   return true
  }
  else{
    return false
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true



const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: 
"long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false
// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqArrays(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqArrays(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false