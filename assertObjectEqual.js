const inspect = require('util').inspect;

const eqObjects = function(object1, object2){
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length){
    return false
  }
   for (let k of obj1Keys){
    if(Array.isArray(object1[k]) && Array.isArray(object2[k])){
      if(!eqArrays(object1[k],object2[k])){
        return false
      }
    }
    else if (object1[k] !== object2[k]){
      return false
    }
   }
  return true
};

const assertObjectsEqual = function(object1, object2) {
 if (eqObjects(object1, object2)) {
  console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
} else {
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
}
};

assertObjectsEqual({a: '1', b: 2 }, {b: 2, a: '1'})
