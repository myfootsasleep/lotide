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


const eqObjects = function(object1, object2){
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length){
    return false
  }
   for (let k of obj1Keys){
    if(Array.isArray(object1[k]) && Array.isArray(object2[k])){
      if(!eqArrays(object1[k],object2[k])){
        return false
      }
    }
    else if (object1[k] !== object2[k]){
      return false
    }
   }
  return true
};

// const p1 = {name: "jack", age: "24"};
// const p2 = {name: "jack", age: "25"};

// assertEqual(eqObjects(p1, p2), false)

//  const shirtObject = { color: "red", size: "medium" };
//  const anotherShirtObject= { size: "small", color: "red" };
// assertEqual(eqObjects(shirtObject , anotherShirtObject), false); // => false


// const shirtObject = { color: "red", size: "medium" };
// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true); // => true

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false