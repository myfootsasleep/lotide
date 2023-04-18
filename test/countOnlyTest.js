const assert = require('chai').assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () =>{
  it("Should Return the amount of times the name appears in the array which is 1", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("Should Return the amount undefined", () => {
    assert.strictEqual(result1["Karmia"], undefined);
  });
  it("Should Return the amount of times the name appears in the array which is 2", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
});