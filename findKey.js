// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKey = function(objects, callback) {
  newObj = {};
  for (stars in objects) {
    //console.log(objects[stars])
    if (callback(objects[stars])) {
      return stars;
    }
  }
};

// testObj = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);

// assertEqual((testObj), "noma");
module.exports = findKey;