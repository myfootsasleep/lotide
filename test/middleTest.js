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