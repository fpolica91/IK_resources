
def sumxtoy(arr, size, l, r):
  prefix = [None] * size
  prefix[0] = arr[0]

  for i in range(1,size):
    prefix[i] = prefix[i - 1] + arr[i]

  if l == 0:
    return prefix[r]
  else:
    return prefix[r] - prefix[l - 1] 
  

print(sumxtoy([1,3,4,6,4], 5, 2, 4))