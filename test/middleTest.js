const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual((middle([1])), []);
//console.log(middle([1]).length)
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
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


