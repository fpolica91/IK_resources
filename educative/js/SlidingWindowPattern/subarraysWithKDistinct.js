function subarraysWithKDistinct(arr, k) {
  const charmap = {};
  let start = 0;
  let count = 0;

  for (let end = 0; end < arr.length; end++) {
    const number = arr[end];
    if (!(number in charmap)) {
      charmap[number] = 1;
    } else charmap[number]++;

    while (Object.keys(charmap).length > k) {
      const leftchar = arr[start];
      start++;
      charmap[leftchar]--;
      if (charmap[leftchar] === 0) {
        delete charmap[leftchar];
      }
    }
    let j = start;
    const matches = { ...charmap };
    while (Object.keys(matches).length === k) {
      count++;
      const leftchar = arr[j];
      matches[leftchar]--;
      if (matches[leftchar] == 0) {
        delete matches[leftchar];
      }
      j++;
    }
  }
  return count;
}

console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3));
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2));
