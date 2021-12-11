#include <iomanip>
#include <iostream>
#include "BubbleSort.h"
using namespace std;

int main()
{
  int A[] = {3, 5, 2, 1, 0, 7}, n = 6;
  BubbleSort(A, n);
  while (n--)
    cout << A[5-n] << ", ";
  
  return EXIT_SUCCESS;
}