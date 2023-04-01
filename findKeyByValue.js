const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let findKeyByValue = function(object1, key) {
  for (let movies in object1) {
    //console.log(object1[movies])
    if (object1[movies] === key) {
      return movies;
    }
  }
};

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


//findKeyByValue(bestTVShowsByGenre, "The Wire")
