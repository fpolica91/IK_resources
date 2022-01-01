


def find_substring(str, pattern):
  res = ""
  endIndex = 0
  startIndex = 0
  charmap = {}
  minlen = len(str) + 1
  start = 0
  matched = 0


  for chr in pattern:
    if chr not in charmap:
      charmap[chr] = 0
    charmap[chr] += 1

  for end, _ in enumerate(str):
    rightchar = str[end]
    if rightchar in charmap:
      charmap[rightchar] -=1
      if charmap[rightchar] >= 0:
        matched+=1

    while matched == len(pattern):
      if minlen > (end - start + 1):
        minlen = (end - start + 1)
        endIndex = end
        startIndex = start
      leftchar = str[start]
      start+=1

      if leftchar in charmap:
        if charmap[leftchar] == 0:
          matched -=1
        charmap[leftchar] +=1

  if minlen > len(str):
    return ""
    
    
  while startIndex <= endIndex:
    res += str[startIndex]
    startIndex+=1
  return  res
      






      

  






print(find_substring("aabdec", "abc"));
print(find_substring("abdbca", "abc"));
print(find_substring("adcad", "abc"));