def non_repeat_substring(str):
  indexMap = {}
  windowstart = 0
  maxlen = 0
  for i in range(len(str)):
    rightchar = str[i]
    if rightchar in indexMap:
      windowstart = max(windowstart, indexMap[rightchar] + 1)
    indexMap[rightchar] = i
    maxlen = max(maxlen, i - windowstart + 1)
  return maxlen