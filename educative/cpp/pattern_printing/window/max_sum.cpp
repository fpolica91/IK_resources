#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

int max_sum(vector<int> vect, int k)
{
  int sum = 0;
  int maxx = 0;
  int len = (6 - k + 1);

  for (int i = 0; i < len; i++)
  {

    for (int j = i; j < i + k; j++)
    {
      sum += vect[j];
    }

    if (sum > maxx)
    {
      maxx = sum;
    }
    sum = 0;
  }

  return maxx;
}

int main()
{
  vector<int> original = {2, 1, 5, 1, 3, 2};
  int res = max_sum(original, 3);
  cout << res << endl;
  return 0;
}