# Input: [2, 1, 5, 2, 3, 2], S=7
# Output: 2
# Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
import math


def smallest(s, arr):
    size = len(arr)
    sum = 0
    maxlen = math.inf
    for i in range(size):
        sum = 0
        for j in range(i, size):
            sum += arr[j]
            if sum >= s:
                maxlen = min(maxlen, (j - i + 1))
                break
    return maxlen


# print(smallest([2, 1, 5, 2, 3, 2], 7))
print("Smallest subarray length: " + str(smallest(7, [2, 1, 5, 2, 3, 2])))
print("Smallest subarray length: " + str(smallest(7, [2, 1, 5, 2, 8])))
print("Smallest subarray length: " + str(smallest(8, [3, 4, 1, 1, 6])))
