const countOnly = function(allItems, itemstoCount) {
  const results = {};
  for (const item of allItems) {
    if (itemstoCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
module.exports = countOnly;
