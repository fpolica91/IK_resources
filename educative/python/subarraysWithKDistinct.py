"""
  Given an integer array nums and an integer k, return the number of good subarrays of nums.
  A good array is an array where the number of different integers in that array is exactly k.
  For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
  A subarray is a contiguous part of an array.
  Example 1:
  Input: nums = [1,2,1,2,3], k = 2
  Output: 7
  Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
  Example 2:

  Input: nums = [1,2,1,3,4], k = 3
  Output: 3
  Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
"""


def subarraysWithKDistinct(arr, k):
    start = 0
    charmap = {}
    count = 0

    for end in range(0, len(arr)):
        curr = arr[end]
        if curr not in charmap:
            charmap[curr] = 1
        else:
            charmap[curr] += 1
        # when subarray longer than k
        while len(charmap) > k:
            leftchar = arr[start]
            start += 1
            charmap[leftchar] -= 1
            if charmap[leftchar] == 0:
                del charmap[leftchar]

        matches = charmap.copy()
        j = start

        while len(matches) == k and k and start <= end:
            count += 1
            lchar = arr[j]
            matches[lchar] -= 1
            if matches[lchar] == 0:
                del matches[lchar]
            j += 1
    return count


print(subarraysWithKDistinct([1, 2, 1, 3, 4], 3))
print(subarraysWithKDistinct([1, 2, 1, 2, 3], 2))
