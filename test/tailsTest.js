const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () =>{
  it("Should Return the array without the first value", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse","Labs"]), ["Lighthouse","Labs"]);
  });
});
