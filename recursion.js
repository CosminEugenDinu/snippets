let print = (...for_print) => console.log(...for_print) || true;

let print_reverse = n => n >= 0 && print(n) && print_reverse(n-1);

// test
// print_reverse(4);

// let reverse_string = str => str.length > 1 && reverse_string(str.slice(1)) + str[0] || str[0];
// let reverse_string = str => str.length === 1 && str[0] || reverse_string(str.slice(1)) + str[0];
// let reverse_string = (str, idx=0) => idx === str.length - 1 && str[idx] || reverse_string(str, idx + 1) + str[idx];
let reverse_string = (str, idx=0) => idx < str.length - 1 && reverse_string(str, idx + 1) + str[idx] || str[idx];

// let reverse_string = str => {
//     if (str.length === 1) {
//         return str[0]
//     }
//      const sub_str = reverse_string(str.slice(1)) + str[0]
//      return sub_str
    
// }


reverse_string("abc");

print('test')
