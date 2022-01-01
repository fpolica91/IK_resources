function find_word_concatenation(str, arr) {
  if (arr.length === 0 || arr[0].length === 0) {
    return [];
  }
  const results = [];
  const wordFrequency = {};
  const eachWordLength = arr[0].length;
  const wordscount = arr.length;

  arr.map((word) => {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word] += 1;
  });

  for (let i = 0; i < str.length - wordscount * eachWordLength + 1; i++) {
    const wordsSeen = {};
    for (let j = 0; j < wordscount; j++) {
      wordIndex = i + j * eachWordLength;
      word = str.substring(wordIndex, wordIndex + eachWordLength);
      if (!(word in wordFrequency)) {
        break;
      }
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }

      wordsSeen[word]++;

      if (wordsSeen[word] > wordFrequency[word] || 0) {
        break;
      }

      if (j + 1 === wordscount) {
        results.push(i);
      }
    }
  }
  return results;
}

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
// console.log(find_word_concatenation("catfoxcat", ["cat", "fox"]));
console.log(solve("catfoxcat", ["cat", "fox"]));
console.log(solve("catcatfoxfox", ["cat", "fox"]));
console.log(solve("cmapcapmap", ["cap", "map"]));
// console.log(find_word_concatenation("catcatfoxfox", ["cat", "fox"]));
