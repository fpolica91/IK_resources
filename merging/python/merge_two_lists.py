
def merge(listA, listB):
  i =0 
  j = 0
  k = 0
  sizeofA = len(listA)
  sizeofB = len(listB)
  # result = [0,0,0,0,0,0,0,0]
  result = [None] * (sizeofA + sizeofB)
  while(j < sizeofB and i < sizeofA):
    if listA[i] < listB[j]:
      result[k] =listA[i]
      k+=1
      i+=1
    else:
      result[k] =listB[j]
      k+=1
      j+=1
      
  while(i < sizeofA):
    result[k] =listA[i]
    i+=1
    k+=1

  while(j < sizeofB):
    result[k] =listB[j]
    j+=1
    k+=1
  return result
  # for i in range(sizeofA)









print(merge([1,2,3,4,6], [5,7,8]))