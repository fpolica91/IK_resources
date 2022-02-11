
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;
// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
/***
 * Input: [2, 1, 5, 1, 3, 2], k=3 
  Output: 9
  Explanation: Subarray with maximum sum is [5, 1, 3].
 */

/**
 * Pattern
 * [1,2,3,4], k = 3
 * 1 + 2  + 3 = 6 
 * sub 1 = 5, add 4 = 9 -> in this case 1, the first element is the item that slides, hence it is deleted from the sum
 */
int max_sum(vector<int> vect, int k)
{
  // here we will accumulate the sum;
  int sum = 0;
  // the maximum sum we will find
  int max_sum = 0;
  // the first elmeent of the array, we will increment this value as the window slides
  int windowstart = 0;
  for (int windowend = 0; windowend < vect.size(); windowend++)
  {
    sum += vect[windowend];
    if (windowend >= k - 1)
    {
      if (sum > max)
      {
        max = sum;
      }
      sum -= vect[windowstart];
      windowstart++;
    }
  }
  return max;
}

// clang++ -std=c++11 max_sum.cpp -o max_sum
// /clang++ -std=c++11 max_sum.cpp -o max_sum
int main()
{
  vector<int> original = {2, 1, 5, 1, 3, 2};
  int res = max_sum(original, 3);
  cout << res << endl;
  return 0;
}