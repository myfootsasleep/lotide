const findKey = function(objects, callback) {
  for (let stars in objects) {
    //console.log(objects[stars])
    if (callback(objects[stars])) {
      return stars;
    }
  }
};
module.exports = findKey;