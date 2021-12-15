#include <iostream>
using namespace std;

int main()
{
  int foo[5] = {7, 9, 3, 4, 1};
  for (int i = 0; i < 5; i++)
  {
    for (int j = 0; j < 5 - 1 - i; j++)
    {
      if (foo[j] > foo[j + 1])
      {
        int temp = foo[j];
        foo[j] = foo[j + 1];
        foo[j + 1] = temp;
      }
    }
  }
  for (int x = 0; x < 5; x++)
  {
    cout << foo[x];
  }
  return 0;
}