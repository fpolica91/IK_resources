


def find_permutation(str, pattern):
  char_frequency = {}
  start = 0
  matches = 0
  for chr in pattern:
    if chr not in char_frequency:
      char_frequency[chr] = 0
    char_frequency[chr] += 1
  
  for end, _ in enumerate(str):
    rightchar = str[end]
    if rightchar in char_frequency:
      char_frequency[rightchar] -=1
      if char_frequency[rightchar] == 0:
        matches +=1
    if matches == len(char_frequency):
      return True
    
    if end >= len(pattern) -1:
      leftchar = str[start]
      start+=1
      if leftchar in char_frequency:
        if char_frequency[leftchar] ==0 :
          matches -=1
        char_frequency[leftchar] += 1
  return False
    

    
    




print(find_permutation("bcdxabcdy", "bcdyabcdx"))
print(find_permutation("odicf", "dc"));
print(find_permutation("oidbcaf", "abc"));
print(find_permutation("aaacb", "abc"));