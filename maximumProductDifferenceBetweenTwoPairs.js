/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let maximum = nums[0], secondMaximum = nums[0], minimum = nums[0], secondMinimum = nums[0];

  //   sort array in ascending order
  nums.sort((a, b) => (a - b))

  // return the product difference 
  return ((nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]))
  
};