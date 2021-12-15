

def max_sum(k, list):
  max = 0
  slot = 0
  sum = 0

  for i in range(len(list)):
    sum += list[i]
    if i >= (k -1):
      if sum > max:
        max = sum
      sum -= list[slot]
      slot +=1

  return max

print(max_sum(3, [2, 1, 5, 1, 3, 2]));
print(max_sum(2, [2, 3, 4, 1, 5]));