



def selectionSort(list):
  length = len(list)
  for i in range(length):
    k = i 
    for j in range(i + 1, length):
      if list[k] > list[j]:
        k = j
    temp = list[i]
    list[i] = list[k]
    list[k] = temp


    
  return list
      






print(selectionSort([7, 4, 1, 5, 2, 3, 6]));