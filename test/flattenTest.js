const assert = require("chai").assert;
const flatten = require("../flatten");


describe("#flatten", () => {
  it("[1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

//console.log(flatten(([1, 2, [3, 4,], 5, [6]])).length)

//let testing = ([1, 2, [3, 4], 5, [6]])
//console.log(testing[2])
