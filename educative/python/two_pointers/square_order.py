def make_squares(arr):
  squares = []
  
  for i in range(len(arr)):
      arr[i] = pow(arr[i],2)
  
  
  for j in range(len(arr)):
      for k in range(j, len(arr)):
          if arr[j] > arr[k]:
              temp = arr[j]
              arr[j] = arr[k]
              arr[k] = temp
   
  for x in range(len(arr)):
       squares.append(arr[x])
  return squares



make_squares([-3, -1, 0, 1, 2])

def make_squares_optimized(arr):
  i  = 0
  j = len(arr) - 1
  highestIndex = len(arr) - 1
  squares = [0 for x in range(len(arr))]
  while i <= j:
    leftsquare = arr[i] * arr[i]
    rightsquare =  arr[j] * arr[j]
    if leftsquare > rightsquare:
       squares[highestIndex] = leftsquare
       i +=1
    else:
      squares[highestIndex] = rightsquare
      j -=1
    highestIndex -= 1
  return squares
      
  

