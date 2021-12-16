function smallest_subarray_with_given_sum(s, array) {
  let start = 0;
  let sum = 0;
  let smallestLength = Infinity;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    while (sum >= s) {
      smallestLength = Math.min(smallestLength, i - start + 1);
      sum -= array[start];
      start++;
    }
  }

  return smallestLength === Infinity ? 0 : smallestLength;
}
