function numSub(s) {
  let map = {};
  let start = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "1") {
      map = {};
      start = i + 1;
      continue;
    }

    if (!(s[i] in map)) {
      map[s[i]] = 0;
    }
    map[s[i]]++;

    while (Object.keys(map).length > 1) {
      const left = s[start];
      start++;
      if (left === "1") {
        map[left]--;
        if (map[left] === 0) {
          delete map[left];
        }
      }
    }
    count += i - start + 1;
  }
  return count;
}
