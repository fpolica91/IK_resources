#include <iostream>

using namespace std;

int main()
{
  int n = 5;
  // outer loop determines the rows
  for (int i = 1; i <= n; i++)
  {
    for (int j = i; j < n; j++)
    {
      cout << " ";
    }
    for (int j = 0; j < i; j++)
    {
      cout << " *";
    }
    cout << endl;
  }
  return 0;
}