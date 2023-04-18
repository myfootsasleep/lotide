const assert = require("chai").assert;
const letterPositions = require("../letterPosition");

describe("#letterPositions", () =>{
  it("Should return where the position of the letter in the word we specify", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});