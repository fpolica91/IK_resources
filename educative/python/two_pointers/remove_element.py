"""
Problem 1: 
 Given an unsorted array of numbers and a target key,
 remove all instances of key in-place and return the new length of the array.
 Example 1:
  Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
  Output: 4
  Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
"""
def remove_element(arr, key):
  i = 1
  j = 0
  while i < len(arr):
    if arr[i] != key:
      arr[j] = arr[i]
      j += 1
    i +=1
  
  array = arr[0:j]

  u = 0
  while u < len(array) - 1:
    if array[u] > array[u + 1]:
      temp = array[u + 1]
      array[u + 1] = array[u]
      array[u] = temp
      u-=1
    u+=1

  


 

  # array = arr[0:j]
  return j, array

    


def main():
  print("Array new length: " +
        str(remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)))
  print("Array new length: " +
        str(remove_element([2, 11, 2, 2, 1], 2)))


main()