function countVowelSubstrings(str) {
  return countVowels(str, 5) - countVowels(str, 4);
}

function countVowels(string, k) {
  const vowels = "aeiou";
  let j = 0;
  let count = 0;
  const charmap = {};

  for (let i = 0; i < string.length; i++) {
    const rightchar = string[i];
    if (vowels.includes(rightchar) === false) {
      charmap = {};
      j = i + 1;
      continue;
    }
    if (!(rightchar in charmap)) {
      charmap[rightchar] = 0;
    }
    charmap[rightchar]++;
    while (Object.keys(charmap).length > k) {
      const leftchar = string[j];
      charmap[leftchar]--;
      if (charmap[leftchar] === 0) {
        delete charmap[leftchar];
      }
      j++;
    }
    count += i - j + 1;
  }
  return count;
}

console.log(countVowelSubstrings("aeiouu"));
