const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    //console.log("true")
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[2]) {
        return true;
      }
    }
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2,3]), true);