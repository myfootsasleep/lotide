const middle = function(arr1) {
  let midArr = [];
  const middle = (Math.floor((arr1.length) / 2));
  if (Math.floor((arr1.length - 1) / 2) === 0) {
  } else if (arr1.length % 2 === 1) {
    midArr = ([arr1[middle]]);
  } else {
    midArr = ([arr1[middle - 1], arr1[middle]]);
  }
  return midArr;
};

module.exports = middle;
