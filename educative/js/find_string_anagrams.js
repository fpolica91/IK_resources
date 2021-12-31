const find_string_anagrams = function (str, pattern) {
  const result_indexes = [];
  let start = 0;
  const charFrequency = {};
  let matches = 0;
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!(char in charFrequency)) {
      charFrequency[char] = 0;
    }
    charFrequency[char]++;
  }

  for (let end = 0; end < str.length; end++) {
    const rightchar = str[end];
    if (rightchar in charFrequency) {
      charFrequency[rightchar]--;
      if (charFrequency[rightchar] === 0) {
        matches++;
      }
    }
    if (matches === Object.keys(charFrequency).length) {
      result_indexes.push(start);
    }
    if (end >= pattern.length - 1) {
      const leftchar = str[start];
      start++;
      if (leftchar in charFrequency) {
        if (charFrequency[leftchar] === 0) {
          matches--;
        }
        charFrequency[leftchar]++;
      }
    }
  }

  return result_indexes;
};

console.log(find_string_anagrams("ppqp", "pq"));
console.log(find_string_anagrams("abbcabc", "abc"));
