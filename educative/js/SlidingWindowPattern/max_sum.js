const max_sub_array_of_size_k = (k, arr) => {
  let sum = 0;
  let slot = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      if (sum > max) max = sum;
      sum -= arr[slot];
      slot++;
    }
  }
  return max;
};

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]));
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));
