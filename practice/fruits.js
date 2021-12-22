// return the longest number of contigous fruits
// length finding algorithm

function fruits_into_baskets(fruits) {
  let windowstart = 0;
  let maxLen = 0;
  const frequenciesFruits = {};
  for (let i = 0; i < fruits.length; i++) {
    const rightChar = fruits[i];
    if (!(rightChar in frequenciesFruits)) {
      frequenciesFruits[rightChar] = 0;
    }
    frequenciesFruits[rightChar]++;
    while (Object.keys(frequenciesFruits).length > 2) {
      const leftChar = fruits[windowstart];
      frequenciesFruits[leftChar]--;
      if (frequenciesFruits[leftChar] === 0) delete frequenciesFruits[leftChar];
      windowstart++;
    }
    maxLen = Math.max(maxLen, i - windowstart + 1);
  }
  return maxLen;
}

const f = ["A", "B", "C", "A", "C"];

console.log(fruits_into_baskets(f));
