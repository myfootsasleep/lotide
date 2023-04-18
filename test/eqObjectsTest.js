const assert = require("chai").assert;
const eqArrays = require("../eqArrays");
const eqObjects = require("../eqObjects");

const p1 = {name: "jack", age: "24"};
const p2 = {name: "jack", age: "25"};

describe("#eqObjects", () =>{
  it("Should return false if bother values don't match", () => {
    assert.deepEqual(eqObjects(p1, p2), false);
  });
});



