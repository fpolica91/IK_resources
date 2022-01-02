function solve(str, list) {
  const charmap = {};
  let res = "";
  let start = 0;
  let results = [];
  let key_1 = [...list].reverse().join("");
  let key_2 = list.join("");
  if (!(key_1 in charmap)) {
    charmap[key_1] = 0;
  }
  if (!(key_2 in charmap)) {
    charmap[key_2] = 0;
  }
  charmap[key_1]++;
  charmap[key_2]++;
  for (let end = 0; end < str.length; end++) {
    const rightchar = str[end];
    res += rightchar;
    while (res.length >= key_1.length) {
      if (res in charmap) {
        results.push(start);
      }
      start++;
      res = str.substring(start, start + key_1.length);
    }
  }
  return results;
}
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
console.log(solve("catfoxcat", ["cat", "fox"]));

console.log(solve("catcatfoxfox", ["cat", "fox"]));
console.log(solve("barfoothefoobarman", ["foo", "bar"]));
