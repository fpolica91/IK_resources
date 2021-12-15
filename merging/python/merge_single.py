

def merge_single(array, low, mid, high):
  i = low
  j = mid + 1
  k = low
  result = [None] * len(array)
  while(i <= mid and j <= high):
    if array[i] < array[j]:
      result[k] = array[i]
      k+=1
      i+=1
    else:
      result[k] = array[j]
      j+=1
      k+=1
  
  while(i <= mid):
    result[k] = array[i]
    k+=1
    i+=1
  while(j <= high):
    result[k] = array[j]
    k+=1
    j+=1
  
  return result
  

num_list = [1, 4, 7, 2, 5, 6]
h = len(num_list) -1
m = h //2
print(merge_single(num_list, 0,m, h))