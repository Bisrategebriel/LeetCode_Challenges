/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let fromCities = [];
  let destCities = [];

  for (let i = 0; i < paths.length; i++) {
    fromCities.push(paths[i][0]);
    destCities.push(paths[i][1]);
  }

  for (const destination of destCities) {
    if (fromCities.indexOf(destination) === -1) return destination;
  }
};
