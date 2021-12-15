
def binarysearch(list, item):
  low = 0
  high = len(list)
  while low <= high -1:
    # get middle pointer
    mid = (low + high) // 2
    # get guess element
    guess = list[mid]
    if guess == item:
      # return index found at
      return mid
    if guess > item:
      # guess was too high search left side
      high = mid - 1
    else:
      # guess was too low search right side
      low = mid  + 1
  
  return None


      

print(binarysearch([1,3,5,7,11], 11))