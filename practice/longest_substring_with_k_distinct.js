function longest_substring_with_k_distinct(str, s) {
  const wordFrequency = {};
  let maxLen = 0;
  let windowstart = 0;
  for (let i = 0; i < str.length; i++) {
    const rightchar = str[i];
    if (!(rightchar in wordFrequency)) {
      wordFrequency[rightchar] = 0;
    }
    wordFrequency[rightchar]++;
    while (Object.keys(wordFrequency).length > s) {
      const leftchar = str[windowstart];
      wordFrequency[leftchar]--;
      if (wordFrequency[leftchar] === 0) {
        delete wordFrequency[leftchar];
      }
      windowstart++;
    }
    maxLen = Math.max(maxLen, i - windowstart + 1);
  }
  return maxLen;
}

console.log(longest_substring_with_k_distinct("araaci", 2));
console.log(longest_substring_with_k_distinct("araaci", 1));
