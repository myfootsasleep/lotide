let findKeyByValue = function(object1, key) {
  for (let movies in object1) {
    //console.log(object1[movies])
    if (object1[movies] === key) {
      return movies;
    }
  }
};
module.exports = findKeyByValue;


