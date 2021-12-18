#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

int fruits_into_baskets(vector<char> vect)
{
  int maxLen = 0;
  unordered_map<char, int> fruitCount;
  int startwindow = 0;
  for (int end = 0; end < vect.size(); end++)
  {
    char righfruit = vect[end];
    fruitCount[righfruit]++;
    while ((int)fruitCount.size() > 2)
    {
      char leftFruit = vect[startwindow];
      fruitCount[leftFruit]--;
      if (fruitCount[leftFruit] == 0)
      {
        fruitCount.erase(leftFruit);
      }
      startwindow++;
    }
    maxLen = max(maxLen, end - startwindow + 1);
  }
  return maxLen;
}

int main()
{
  vector<char> vec = {'A', 'B', 'C', 'A', 'C'};
  int result = fruits_into_baskets(vec);
  cout << result << endl;

  return 0;
}