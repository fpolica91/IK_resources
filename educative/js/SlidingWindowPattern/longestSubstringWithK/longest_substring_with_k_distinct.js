function longest_substring_with_k_distinct(string, k) {
  let windowStart = 0;
  let max = 0;
  const charsFrequency = {};
  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    const rightMostChar = string[windowEnd];
    if (!(rightMostChar in charsFrequency)) {
      // this is the first time encounterng this character
      charsFrequency[rightMostChar] = 0;
    }
    charsFrequency[rightMostChar]++;
    // Object.keys(charsFrequency).length = [a,c,e] -> if the key exists it will simply incrememnt val, else it will add another key.
    // so if we have more keys thatn k, our substring has more than k characters
    while (Object.keys(charsFrequency).length > k) {
      const leftElement = string[windowStart];
      // count is decrementing because this element is sliding off the window
      charsFrequency[leftElement]--;
      // if the entry is 0 delete the key as we no longer have that character in substring
      if (charsFrequency[leftElement] === 0) delete charsFrequency[leftElement];
      windowStart++;
    }
    // window start refers to the first index of the substring and windowEnd to the last element of the substring.
    // Hence this gives us the length of the substring.
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
}

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    2
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    1
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "cbbebi",
    3
  )}`
);
