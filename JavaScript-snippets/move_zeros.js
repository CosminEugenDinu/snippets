const assert = require("assert").strict;

var moveZeros = function (arr) {
    console.log('before', arr);
    const arrLength = arr.length;

    // indexul folosit la iterare ("trage" 0-urile dupa el)
    let iter_0 = 0;
    // indexul primului element non-zero
    let next_1 = 0;

    // numar cate iterari se fac in total
    const iterations = [0];
    

    // while (next_1 < arr.length) {
    while (iter_0 < arr.length) {
        iterations[0] ++;

        // daca elementul curent else 0, atunci il schimb cu urmatorul non-zero
        if (arr[iter_0] === 0) {
            next_1 = nextNonZero(arr, iter_0, iterations);
            
            // schimba valorile doar daca exista un element non-zero
            next_1 && swap(arr, iter_0, next_1);
            console.log('after ', arr)
        }

        // incrementarea obligatorie pentru traversare 
        iter_0 ++;
    }

    console.log('arrLength', arrLength);
    console.log('iterations', iterations);

    return arr;
}

function swap(arr, index_1, index_2) {
    // inlocuieste valoarea de la index_1 cu cea de la index_2
    
    console.log(`swapping arr[${index_1}]`, arr[index_1], `with arr[${index_2}]`, arr[index_2])
    const tmp = arr[index_1];
    arr[index_1] = arr[index_2];
    arr[index_2] = tmp;
}

function nextNonZero(arr, currIndex, iterations) {
    // returneaza urmatorul element non-zero incepand cu indexul curent (currIndex) 
    
    let next_1 = currIndex;
    while (next_1 < arr.length - 1) {
        iterations[0] ++;
        if (arr[++next_1] !== 0) {
            return next_1;
        }
    }
}

assert.deepEqual(
    JSON.stringify(moveZeros([0,0, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
    JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0, 0,0])
);
assert.deepEqual(
    JSON.stringify(moveZeros([0, 0, 1, 0, 2, 3, 0, 4, 0, 5, 0, 6, 0, 7, 8, 0])),
    JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0])
);
assert.deepEqual(
    JSON.stringify(moveZeros([1, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 8, 0])),
    JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0])
);
