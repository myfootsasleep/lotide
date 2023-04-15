
let newTail = [];
const tail = function(arr1) {
  newTail = arr1.slice(1);
  return newTail;
};

module.exports = tail;
