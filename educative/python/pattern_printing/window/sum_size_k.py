# [2, 1, 5, 1, 3, 2], k=3
# [2, 3, 4, 1, 5], k=2


def max_sum(arr, k):
    sizeof = len(arr) - k + 1
    sum = 0
    max = 0
    for i in range(sizeof):
        for j in range(i, i + k):
            sum += arr[j]
        if sum > max:
            max = sum
        sum = 0
    return max


print(max_sum([2, 1, 5, 1, 3, 2], 3))
print(max_sum([2, 3, 4, 1, 5], 2))
