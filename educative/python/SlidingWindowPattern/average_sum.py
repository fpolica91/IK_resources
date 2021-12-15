

def average_sum_subarrays(k, list):
  results = []
  sum = 0
  slot = 0
  for i in range(len(list)):
    sum += list[i]
    if i >= (k -1):
      results.append(sum / k)
      sum -= list[slot]
      slot+=1
    

  return results







print(average_sum_subarrays(3, [2, 1, 5, 1, 3, 2]));
print(average_sum_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]))