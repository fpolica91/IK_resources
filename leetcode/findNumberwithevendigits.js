function findNumbers(nums) {
  let numOfEven = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 == 0) {
      numOfEven++;
    }
  }
  return numOfEven;
}

function findNums(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (isEven(nums[i])) {
      total++;
    }
  }
  return total;
}

function isEven(num) {
  let count = 0;
  while (num >= 1) {
    count++;
    num /= 10;
  }
  return count % 2 === 0;
}

console.log(findNums([12, 345, 2, 6, 7896]));
