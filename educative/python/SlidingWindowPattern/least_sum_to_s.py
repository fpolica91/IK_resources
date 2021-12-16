import math
"""
  in here we need to find the smallest number of elements in a subarray that add up to s
  we will use sliding window pattern
  we will start at index 0 and go until where sum  >= s
  then we will substract the smallest element from the left in relation to the pattern
  we need to keep an accumulator that will keep track of the smallest number of additions

"""
def smallest_subarray_with_given_sum(s, list):
  smallest = math.inf
  sum = 0
  startWindow = 0
  for end_window in range(len(list)):
    sum += list[end_window]
    while sum >= s:
      smallest = min(smallest, end_window - startWindow +1)
      sum -= list[startWindow]
      startWindow+=1
  
  if smallest == math.inf:
    return 0
  else: 
    return smallest



print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])))
print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])))
print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])))
