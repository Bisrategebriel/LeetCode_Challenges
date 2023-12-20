/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  let minimumPrice;
  let secondMinimumPrice;

  prices.sort((a, b) => a - b);

  minimumPrice = prices[0];
  secondMinimumPrice = prices[1];

  if (minimumPrice + secondMinimumPrice <= money) {
    return money - (minimumPrice + secondMinimumPrice);
  }

  return money;
};

console.log(buyChoco([41, 1, 28, 2, 92, 97, 1, 87], 68));
