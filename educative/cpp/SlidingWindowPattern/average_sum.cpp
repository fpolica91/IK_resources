#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

/***
 * In many problems dealing with an array (or a LinkedList),
 * we are asked to find or calculate something among all the contiguous subarrays (or sublists) of a given size. 
 * For example, take a look at this problem:
 * Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
 */

vector<double> average_sum(vector<int> vect, int k)
{
  vector<double> sums(vect.size() - k + 1);
  int windowstart = 0;
  double sum = 0;
  for (int windowend = 0; windowend < vect.size(); windowend++)
  {
    sum += vect[windowend];
    if (windowend >= k - 1)
    {
      sums[windowstart] = sum / k;
      // we substract the element from the left;
      sum -= vect[windowstart];
      windowstart++;
    }
  }
  return sums;
}

int main()
{
  vector<int> vect = {1, 3, 2, 6, -1, 4, 1, 8, 2};
  vector<double> result = average_sum(vect, 5);
  for (double d : result)
  {
    cout << d << endl;
  }
  return 0;
}