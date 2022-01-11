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


def smallest_using_window(s, arr):
    size = len(arr)
    sum = 0
    start = 0
    minlen = math.inf
    for i in range(size):
        sum += arr[i]
        while sum >= s:
            minlen = min(minlen, i - start + 1)
            num = arr[start]
            sum -= num
            start += 1
    return minlen


# print(smallest([2, 1, 5, 2, 3, 2], 7))
print("Smallest subarray length: " + str(smallest_using_window(7, [2, 1, 5, 2, 3, 2])))
print("Smallest subarray length: " + str(smallest_using_window(7, [2, 1, 5, 2, 8])))
print("Smallest subarray length: " + str(smallest_using_window(8, [3, 4, 1, 1, 6])))
