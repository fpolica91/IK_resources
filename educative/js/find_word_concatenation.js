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
        console.log(j, "not here");
        break;
      }

      if (j + 1 === wordscount) {
        results.push(i);
      }
    }
  }
  return results;
}

console.log(find_word_concatenation("catfoxcat", ["cat", "fox"]));
// console.log(find_word_concatenation("catcatfoxfox", ["cat", "fox"]));
// console.log(find_word_concatenation("cmapcapmap", ["cap", "map"]));
