
def checkInclusion(pattern, str):
      charsfrequency = {}
      start = 0
      matches = 0

      for char in pattern:
          if char not in charsfrequency:
              charsfrequency[char] = 0
          charsfrequency[char] +=1

      
      for end in range(len(str)):
        rightchar = str[end]
        if rightchar in charsfrequency:
            charsfrequency[rightchar] -=1
            if charsfrequency[rightchar] == 0:
                matches += 1
          
        if matches == len(charsfrequency):
            return True
          
        if end >= len(pattern) - 1:
            leftchar = str[start]
            start += 1
            if leftchar in charsfrequency:
                if charsfrequency[leftchar] == 0:
                    matches -= 1
                charsfrequency[leftchar] += 1
      return False

print('Permutation exist: ' + str(checkInclusion("yk", "ainwkckifykxlribaypk")))