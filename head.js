// FUNCTION IMPLEMENTATION
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
let firstChar = ""
let head = function(arr1){
  //Testing what is outputted console.log(arr1[0])
  firstChar = arr1[0]
  return firstChar
}

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//ssertEqual(1, 1);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");