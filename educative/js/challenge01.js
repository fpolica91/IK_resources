const find_permutation = function (str, pattern) {
  const map = {};
  let start = 0;
  let match = 0;
  let k = pattern.length;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    Object.assign(map, { [char]: 0 });
  }

  for (let x = 0; x < pattern.length; x++) {
    map[pattern[x]] += 1;
  }

  for (let end = 0; end < str.length; end++) {
    let rightchar = str[end];
    if (rightchar in map) {
      map[rightchar] -= 1;
      if (map[rightchar] === 0) {
        match++;
      }
    }

    if (match === Object.keys(map).length) {
      return true;
    }

    if (end >= k - 1) {
      const leftchar = str[start];
      start++;
      if (leftchar in map) {
        if (map[leftchar] === 0) {
          match -= 1;
        }
        map[leftchar]++;
      }
    }
  }

  return false;
};

console.log(find_permutation("bcdxabcdy", "bcdyabcdx"));
console.log(find_permutation("odicf", "dc"));
console.log(find_permutation("oidbcaf", "abc"));
console.log(find_permutation("aaacb", "abc"));
