
def longest_substring_with_k_distinct(str, k):
  windowStart = 0
  maxLen = 0
  char_frequency = {}
  for windowEnd in range(len(str)):
    rightmostchar = str[windowEnd]
    if rightmostchar not in char_frequency:
      char_frequency[rightmostchar] = 0
    char_frequency[rightmostchar] +=1
    while len(char_frequency) > k:
      leftmostchar = str[windowStart]
      char_frequency[leftmostchar] -=1
      if char_frequency[leftmostchar] == 0:
        del char_frequency[leftmostchar]
      windowStart+=1
    maxLen = max(maxLen, windowEnd - windowStart +1)

  return maxLen







def main():
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 2)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 1)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("cbbebi", 3)))


main()