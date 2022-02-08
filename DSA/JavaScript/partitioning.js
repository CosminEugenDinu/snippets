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
// const p = partition(arr);
// console.log(p, arr)

//move all zeros to front and keep the order of elements

function moveOrder(A, refVal=0) {
  const temp = Array(A.length).fill(refVal);
  let i = A.length, j = i;
  while (--i >= 0) {
    if (A[i] !== refVal) {
      temp[--j] = A[i]
    }
  }  
  console.log(temp)
}

console.log(arr)
moveOrder(arr);