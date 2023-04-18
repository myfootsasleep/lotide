const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let k of obj1Keys) {
    if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {
      if (!eqArrays(object1[k],object2[k])) {
        return false;
      }
    } else if (object1[k] !== object2[k]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
