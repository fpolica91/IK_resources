
def findMaxConsecutiveOnes(nums):
  maxsum = 0
  currentsum =0
  for n in range(len(nums)):
    if nums[n] == 1:
      currentsum +=1
    else:
      currentsum = 0
    if currentsum > maxsum:
      maxsum = currentsum
  return maxsum 



print(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));