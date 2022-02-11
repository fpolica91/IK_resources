function max_sum(arr, k) {
  let sum = 0;
  let max_sum = 0;
  const len = arr.length - k + 1;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    if (sum > max_sum) max_sum = sum;
    sum = 0;
  }
  return max_sum;
}

console.log(max_sum([2, 1, 5, 1, 3, 2], 3));
console.log(max_sum([2, 3, 4, 1, 5], 2));
