#include <iostream>
#include <limits>
#include <vector>

using namespace std;

class MinSizeSubArraySum
{
public:
  static int findMinSubArray(int S, const vector<int> &arr)
  {
    int sum = 0;
    int start = 0;
    int smallestSum = numeric_limits<int>::max();

    for (int i = 0; i < arr.size(); i++)
    {
      sum += arr[i];
      while (sum >= S)
      {
        smallestSum = min(smallestSum, i - start + 1);
        sum -= arr[start];
        start++;
      }
    }
    if (smallestSum == numeric_limits<int>::max())
    {
      return 0;
    }
    return smallestSum;
  }
};

int main(int argc, char *argv[])
{
  int result = MinSizeSubArraySum::findMinSubArray(7, vector<int>{2, 1, 5, 2, 3, 2});
  // int result = MinSizeSubArraySum::findMinSubArray(7, vector<int>{2, 1, 5, 2, 3, 2});
  // cout << "Smallest subarray length: " << result << endl;
  return 0;
}