void merge(int A[], int l, int m, int r, int S[]);
void mergeSort(int A[], int l, int r, int S[]);


void mergeSort(int A[], int l, int r, int S[]) {
  if (r - l > 1) {
    int m = (l + r) / 2;
    mergeSort(A, l, m, S);
    mergeSort(A, m, r, S);
    merge(A, l, m, r, S);
  }
}

void merge(int A[], int l, int m, int r, int S[]) {
  int i = l, j = m, k = l;
  while (i < m && j < r) {
    if (A[i] <= A[j]) {
      S[k] = A[i];
      i++;
      k++;
    } else {
      S[k] = A[j];
      j++;
      k++;
    }
  }
  while (i < m) {
    S[k] = A[i];
    i++;
    k++;
  }
  while (j < r) {
    S[k] = A[j];
    j++;
    k++;
  }
  // copy back
  for (int i = l; i < r; i++) {
    A[i] = S[i];
  }
}