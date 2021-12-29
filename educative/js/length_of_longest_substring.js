/**
 * 
 * @param {*} str 
 * @param {*} k 
  Problem Statement#
  Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.
  Example 1:
  Input: String="aabccbb", k=2
  Output: 5
  Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
 */
function length_of_longest_substring(str, k) {
  let start = 0;
  const frequencymap = {};
  let mostFrequent = 0;
  let maxlen = 0;
  let endchar = 0;
  let startchar = 0;

  for (let end = 0; end < str.length; end++) {
    const rightchar = str[end];
    if (!(rightchar in frequencymap)) {
      frequencymap[rightchar] = 0;
    }
    frequencymap[rightchar] += 1;
    mostFrequent = Math.max(mostFrequent, frequencymap[rightchar]);
    if (end - start + 1 - mostFrequent > k) {
      const leftchar = str[start];
      frequencymap[leftchar] -= 1;
      start += 1;
    }
    if (maxlen < end - start + 1) {
      endchar = end;
      startchar = start;
    }

    maxlen = Math.max(maxlen, end - start + 1);
  }

  const result = str.substring(startchar, endchar + 1);

  return {
    result,
    maxlen,
  };
}

console.log(length_of_longest_substring("abccde", 1));
