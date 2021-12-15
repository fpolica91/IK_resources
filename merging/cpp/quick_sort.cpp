#include <iostream>
using namespace std;

void swap(int *x, int *y)
{
  int temp = *x;
  *x = *y;
  *y = temp;
};

int partition(int A[], int low, int high)
{
  int pivot = A[low];
  int i = low;
  int j = high;

  do
  {
    do
    {
      i++;
    } while (A[i] <= pivot);
    do
    {
      j--;
    } while (A[j] > pivot);
    if (i < j)
    {
      swap(&A[i], &A[j]);
    }

  } while (i < j);
  swap(&A[low], &A[j]);
  return j;
}

void quicksort(int A[], int low, int high)
{
  int j;
  if (low < high)
  {
    j = partition(A, low, high);
    quicksort(A, low, j);
    quicksort(A, j + 1, high);
  }
}

int main()
{
  int A[] = {11, 13, 7, 12, 16, 9, 24, 5, 10, 3}, n = 10;
  quicksort(A, 0, n);

  for (int i = 0; i < 10; i++)
  {
    cout << A[i] << endl;
  }
  return 0;
}