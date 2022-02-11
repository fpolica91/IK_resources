// # Input: [2, 1, 5, 2, 3, 2], S=7
// # Output: 2
// # Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

function smallest(s, arr) {
  let sum = 0;
  let min_len = Infinity;

  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum >= s) {
        min_len = Math.min(min_len, j - i + 1);
        break;
      }
    }
  }
  return min_len;
}

console.log(smallest(7, [2, 1, 5, 2, 3, 2]));
console.log(smallest(7, [2, 1, 5, 2, 8]));
