#include <iostream>
using namespace std;
int main()
{

  int n = 5;

  for (int i = 0; i <= n - 1; i++)
  {
    for (int j = 1; j <= i + 1; j++)
    {
      cout << "*";
    }

    for (int j = i; j <= n; j++)
    {
      cout << "  ";
    }

    for (int j = 1; j <= i + 1; j++)
    {
      cout << "*";
    }

    cout << "\n";
  }
  for (int i = 0; i <= n; i++)
  {
    for (int j = i; j <= n; j++)
    {
      cout << "*";
    }

    for (int j = 0; j <= i; j++)
    {
      cout << "  ";
    }
    for (int j = i; j <= n; j++)
    {
      cout << "*";
    }
    cout << "\n";
  }
}