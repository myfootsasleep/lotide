const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () =>{
  it("Should Return the middle values of the array []", () => {
    assert.deepEqual((middle([1])), []);
  });
  it("Should Return the middle values of the array [2,3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("Should Return the middle values of the array [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});


//console.log(middle([1]).length)
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
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


