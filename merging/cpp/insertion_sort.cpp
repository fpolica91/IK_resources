#include <iostream>
using namespace std;
int main()
{
  int A[5] = {7, 9, 3, 4, 1};
  for (int i = 0; i < 5; i++)
  {
    int current = A[i];
    int j = i - 1;
    while (j >= 0 && A[j] > current)
    {
      A[j + 1] = A[j];
      j--;
    }
    A[j + 1] = current;
  }
  for (int x = 0; x < 5; x++)
  {
    cout << A[x];
  }
  return 0;
}