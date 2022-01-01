function find_substring(str, pattern) {
  let startIndex = 0;
  let start = 0;
  let res = "";
  let endIndex = 0;
  const charsFrequency = {};
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!(char in charsFrequency)) {
      charsFrequency[char] = 0;
    }
    charsFrequency[char]++;
  }

  let minlen = str.length + 1;
  let matches = 0;
  for (let end = 0; end < str.length; end++) {
    const rightchar = str[end];
    if (rightchar in charsFrequency) {
      charsFrequency[rightchar]--;
      if (charsFrequency[rightchar] === 0) {
        matches++;
      }
    }
    while (matches === pattern.length) {
      if (minlen > end - start + 1) {
        minlen = end - start + 1;
        startIndex = start;
        endIndex = end;
      }
      const leftchar = str[start];
      start++;
      if (leftchar in charsFrequency) {
        if (charsFrequency[leftchar] === 0) {
          matches--;
        }
        charsFrequency[leftchar]++;
      }
    }
  }

  if (minlen > str.length) {
    return "";
  }

  for (startIndex; startIndex <= endIndex; startIndex++) {
    res += str[startIndex];
  }
  return res;
  // return str.substring(startIndex, startIndex + minlen);
}

console.log(find_substring("aabdec", "abc"));
console.log(find_substring("abdbca", "abc"));
console.log(find_substring("adcad", "abc"));
