// Move all zeros to front (the order of elements does not matter)

const arr = [1, 3, 2, 0, 5, 1, 2, 7, 0, 0, -1, 3, 0];

function partition(A, refVal=0) {
  let i = -1;
  for (let j = 0; j < A.length; j++) {
    if (A[j] === refVal) {
      i = i + 1;
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
  return i + 1;
}

const p = partition(arr);

console.log(p, arr)