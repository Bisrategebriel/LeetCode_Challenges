/**
 * @param {number[][]} accounts
 * @return {number}
 * 
 * Constraints:
    m == accounts.length
    n == accounts[i].length
    1 <= m, n <= 50
    1 <= accounts[i][j] <= 100
 */

let maximumWealth = function (accounts) {
  let maxWealth = 0;

  accounts.forEach((customer) => {
    let customerTotalWealth = 0;

    customer.forEach((account) => {
      customerTotalWealth += account;

      maxWealth = Math.max(customerTotalWealth, maxWealth);
    });
  });

  return maxWealth;
};
