// Given a string and a pattern, find out if the string contains any permutation of the pattern.
function _find_permutation(str, pattern) {
  const charFrequency = {};
  let start = 0;
  let matches = 0;
  let k = pattern.length;
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
      charFrequency[rightchar] -= 1;
      if (charFrequency[rightchar] === 0) {
        matches++;
      }
    }

    if (matches === Object.keys(charFrequency).length) {
      return true;
    }

    if (end >= k - 1) {
      const leftchar = str[start];
      start++;
      if (leftchar in charFrequency) {
        if (charFrequency[leftchar] === 0) {
          matches = -1;
        }
        charFrequency[leftchar]++;
      }
    }
  }
  return false;
}

console.log(_find_permutation("bcdxabcdy", "bcdyabcdx"));
console.log(_find_permutation("odicf", "dc"));
console.log(_find_permutation("oidbcaf", "abc"));
console.log(_find_permutation("aaacb", "abc"));
