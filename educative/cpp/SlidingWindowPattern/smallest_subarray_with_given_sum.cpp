#include <iostream>
#include <string>
#include <limits>
#include <vector>
using namespace std;

/**
 * Given an array of positive numbers and a positive number
 *  ‘S,’ 
 * find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
 * Return 0 if no such subarray exists.
 * Input: [2, 1, 5, 2, 3, 2], S=7 
  Output: 2
  Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
 * */

int smallest_subarray(vector<int> vect, int s)
{
  int minLength = numeric_limits<int>::max();
  int windowstart = 0;
  int sum = 0;
  for (int end = 0; end < vect.size(); end++)
  {
    sum += vect[end];
    while (sum >= s)
    {
      minLength = min(minLength, end - windowstart + 1);
      sum -= vect[windowstart];
      windowstart++;
    }
  }

  return minLength;
}

int main()
{
  vector<int> vect = {2, 1, 5, 2, 3, 2};
  int result = smallest_subarray(vect, 7);
  cout << "the smallest subarray length is " << result << endl;
  return 0;
}