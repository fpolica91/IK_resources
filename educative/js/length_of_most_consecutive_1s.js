const length_of_most_consecutive_1s = function (arr, k) {
  let maxlen = 0;
  let frequencyChar = {};
  let mostfrequent = 0;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    const rightnum = arr[end];
    if (!(rightnum in frequencyChar)) {
      frequencyChar[rightnum] = 0;
    }
    frequencyChar[rightnum] += 1;

    mostfrequent = Math.max(mostfrequent, frequencyChar[rightnum]);

    if (end - start + 1 - mostfrequent > k) {
      const leftnum = arr[start];
      frequencyChar[leftnum] -= 1;
      start++;
    }
    maxlen = Math.max(maxlen, end - start + 1);
  }

  return maxlen;
};
