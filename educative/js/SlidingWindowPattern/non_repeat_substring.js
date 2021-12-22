/**
 * Problem Statement#
    Given a string, find the length of the longest substring, which has all distinct characters.
    Example 1:

    Input: String="aabccbb"
    Output: 3
    Explanation: The longest substring with distinct characters is "abc".
    Example 2:

    Input: String="abbbb"
    Output: 2
    Explanation: The longest substring with distinct characters is "ab".
    Example 3:

    Input: String="abccde"
    Output: 3
    Explanation: Longest substrings with distinct characters are "abc" & "cde".
 */

/**
 *
 * @param {*} str
 * This problem follows the Sliding Window pattern,
 * and we can use a similar dynamic sliding window strategy as discussed in Longest Substring with K Distinct Characters.
 * We can use a HashMap to remember the last index of each character we have processed.
 * Whenever we get a duplicate character, we will shrink our sliding window to ensure that we always have distinct characters in the sliding window.
 */

function non_repeat_substring(str) {
  let windowstart = 0;
  const charmap = {};

  maxlen = 0;
  for (let windowend = 0; windowend < str.length; windowend++) {
    let rightchar = str[windowend];
    if (rightchar in charmap) {
      windowstart = Math.max(windowstart, charmap[rightchar] + 1);
    }
    charmap[rightchar] = windowend;
    maxlen = Math.max(maxlen, windowend - windowstart + 1);

    console.log(windowstart, "windowstart", windowend, "windowend");
    console.log(rightchar, "rightchar");
    console.log(maxlen, "max length");
    console.log(charmap);
  }

  return maxlen;
}

console.log(
  `Length of the longest substring: ${non_repeat_substring("aabccbb")}`
);

/**
  * 1st iteration -> 0 windowstart 0 windowend, rightchar = a, 1 maxLen, map ={a: 0}
  * 2nd iteration -> 1 windowstart 1 windowend rightchar = a, 1 malen, map = {a: 1} // index of a was changed, skipping a at index 0;
  * 3rd iteration -> 1 windowstart 2 windowend rightchar = b, 2 maxlen, map = {a:1, b :2}
  * 4th iteration -> 1 windowstart 3 windowend rightchar = c, 3 maxlen, map = {a:1, b:2, c:3} -> longest substring we've seen so far. 
  * 5th iteration -> 4 windowstart 4 windowend // windowstart was updated because c repeats on index 4. 
    rightcahr = c, maxlen = 3 // we keep the longest string we've seen, map = {a:1, b:2 , c: 4} // index of c was updated
  * 6th iteration -> 4 windowstart 5 windowend // duplicate but windowstart is ahead of b, which is at index 2
    we update the index of b, but keep the windowstart at 4, rightchar = b; maxlen = 3; map ={a:1, b:5,c:4}
  * 7th iteration 6 windowstart 6 windowend -> b duplicates again, rightchar = b; maxlen = 3; map = {a:1, b: 6, c: 4}
    // since last index of b was 5, and windowstart was 4 we set windowstart to 5 + 1. 
  * this algorithm returns a result to the questions by shirking the window from the left and keeping track of the length. 
  

 */

// console.log(
//   `Length of the longest substring: ${non_repeat_substring("abbbb")}`
// );
// console.log(
//   `Length of the longest substring: ${non_repeat_substring("abccde")}`
// );

/**
 * aabccbb
 * abcc
 */
