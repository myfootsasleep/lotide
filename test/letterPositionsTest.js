const assert = require("chai").assert;
const { AssertionError } = require("chai");
const letterPositions = require("../letterPosition");

describe("#letterPositions", () =>{
  it("Should return where the position of the letter in the word we specify", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("Should return here the positions of the letter would be", () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    });
  });
});