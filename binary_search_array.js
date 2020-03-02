const print = (...args) => console.log(...args) || true
const arr_seq_iter = (from=0, to=100) => {
    a = []
    for (let i = from; i <= to; i++) a.push(i)
    return a
}
// recursive function to generate array sequence
const arr_seq_rec = (from=0, to=100, a=[]) =>
    from >= to-1 && from
    || (
        a.push(from)
        && arr_seq_rec(from + 1, to, a)
    )
    && a
// const arr_seq = (from=0, to=100, a=[]) =>
//     from >= to-1 && to
//     || a.push(to)
//     && arr_seq(from, to-1, a)
//     && a
// const arr_seq = (from=0, to=100) => {
//     if (from >= to - 1) {
//         return [to]
//     }
//     sub_arr = arr_seq(from, to -1)
//     sub_arr.push(to)
//     return sub_arr
// }
// print(arr_seq(0, 1000))
// let a = [1, 2, 3]
// print(Object.getOwnPropertyNames(Object.getPrototypeOf(a)))

const binarySearch = (arr, target) =>
    rec_binarySearch(arr, 0, arr.length - 1, target)

const rec_binarySearch = (arr, start, end, target) => {
    if (start > end) {
        return -1
    }
    const mid_idx = Math.trunc((start + end) / 2)

    if (target === arr[mid_idx]) {
        return arr[mid_idx]
    } else if (target < arr[mid_idx]) {
        return rec_binarySearch(arr, start, mid_idx -1, target)
    } else {
        return rec_binarySearch(arr, mid_idx + 1, end, target)
    }

}

// test
// const arr = arr_seq_rec(0, 1800)
const arr = arr_seq_iter(0, 100_000_000)
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const found = binarySearch(arr, 1568)
print(found)
