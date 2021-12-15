
# we make bubble sort adaptive by using a flag 
# adaptive means it takes the least amount of time if the list is already sorted
# bubble sort is stable
def bubble_sort(list):
  length = len(list)
  for i in range((length)):
    flag = 0
    for j in range((length - 1 - i)):
      if list[j] > list[j + 1]:
        temp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = temp
        flag = 1
    if flag == 0:
      break
  return list




   
    


print(bubble_sort([4,2,7]))