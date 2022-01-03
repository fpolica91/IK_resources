
# given an array remove all duplicates in place 
# return length of array and array without elements

def remove_duplicates(arr):
  i = 1
  j = 1
  while i < len(arr):
    sentinel = arr[j - 1]
    if sentinel != arr[i]:
      arr[j] = arr[i]
      j+=1
    i +=1
  return j, arr[0:j]







print(remove_duplicates([2, 3, 3, 3, 6, 9, 9]))