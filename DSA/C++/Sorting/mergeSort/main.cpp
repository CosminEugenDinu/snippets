#include <iomanip>
#include <iostream>
#include <ctime>
#include "MergeSort.h"
using namespace std;



int main()
{
  int n = 100;
  int A[n], S[n];

  srand((unsigned)time(0));
  for (int i = 0; i < 100; i++) {
    A[i] = rand() % 100 + 1;
  }

  int k = n;
  while (k--)
    cout << A[n-k-1] << ", ";
  cout << endl;

  mergeSort(A, 0, n, S);


  k = n;
  while (k--)
    cout << S[n-k-1] << ", ";
  cout << endl;
  
  return EXIT_SUCCESS;
}