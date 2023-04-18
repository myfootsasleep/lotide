const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () =>{
  it("Should return the right genre of show based on the name, in this case drama", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("Should return the right genre of show based on the name, in this case undefined", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});