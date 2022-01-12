
const A1 = [2, 3, 4, 5, 7];
const A2 = Array(A1.length).fill(0);


function merge2(S1, S2, S) {
  let i = 0, j = 0, k = 0;
  while (i < S1.length && j < S2.length) {
    if (S1[i] <= S2[j]) {
      S[k] = S1[i];
      i++;
      k++;
    }
    else {
      S[k] = S2[j];
      j++;
      k++;
    }
  }

  while (i < S1.length) {
    S[k] = S1[i];
    i++;
    k++;
  }
  while (j < S2.length) {
    S[k] = S2[j];
    j++;
    k++
  }
}

// const S1 = [3, 4, 7, 5];
// const S2 = [1, 2, 8];
// const S = Array(S1.length + S2.length);
// merge2(S1, S2, S);
// console.log(S);


function merge(A, l, m, r, S) {
  let i = l, j = m, k = l;
  while (i < m && j < r) {
    if (A[i] <= A[j]) {
      S[k] = A[i];
      i++;
      k++
    } else {
      S[k] = A[j];
      j++;
      k++
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
  for (let i = l; i < r; i++) {
    A[i] = S[i];
  }
}

function mergeSort(A, l, r, S) {
  const m = Math.floor((l + r)/2);
  if (r - l > 1) {
    mergeSort(A, l, m, S);
    mergeSort(A, m, r, S);
    merge(A, l, m, r, S);
  }
}
const a = [2, 1, 2, 2, 3, 9, 1, 0, 3, 7, 4, 8];
const s = Array(a.length).fill('x');
mergeSort(a, 0, a.length, s);
console.log(s);