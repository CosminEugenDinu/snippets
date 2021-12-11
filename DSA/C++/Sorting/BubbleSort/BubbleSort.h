
void BubbleSort(int A[], int n) {
  for (int pass = n - 1; pass >= 0; pass--) {
    for (int i = 0; i <= pass - 1; i++) {
      if (A[i] > A[i+1]) {
        A[i] = A[i] + A[i+1];
        A[i+1] = A[i] - A[i+1]; 
        A[i] = A[i] - A[i+1];
      }
    }
  }
}