/**
 * 
 * Input: nums = [1,1,0,1,1,1]
  Output: 3
  Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
 */

function findMaxConsecutiveOnes1(nums) {
  let counts = [];
  let currentCounter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCounter++;
    }
    if (nums[i] === 0) {
      currentCounter = 0;
    }
    counts.push(currentCounter);
  }
  return Math.max(...counts);
}

function findMaxConsecutiveOnes(nums) {
  let current = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++;
    } else {
      current = 0;
    }
    if (current > max) max = current;
  }
  return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
