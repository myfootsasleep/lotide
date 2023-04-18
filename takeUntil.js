const takeUntil = function(array, callback) {
  let results1 = [];
  for (let item of array) {
    if (!callback(item)) {
      results1.push(item);
    } else {
      return results1;
    }
  }

};
module.exports = takeUntil;