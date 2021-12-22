/**
 * Solution process 
 * /**
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
  
 * */

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

#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int non_repeat_substring(const string str, int k)
{
  int windowstart = 0;
  int maxlen = 0;
  unordered_map<char, int> indexMap;
  for (int windowend = 0; windowend < str.size(); windowend++)
  {
    char rightChar = str[windowend];
    if (indexMap.find(rightChar) != indexMap.end())
    {
      windowstart = max(windowstart, indexMap[rightChar] + 1);
    }
    indexMap[rightChar] = windowend;
    maxlen = max(maxlen, windowend - windowstart + 1);
  }
}

int main()
{
}