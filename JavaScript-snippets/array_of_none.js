
const assert = require('assert');


function arrayOfNone(arr){
  const noneLike = [NaN,'',null,undefined];
  return arr.reduce((isEmpty,val) =>{
    return noneLike.includes(val) ? isEmpty : false;
  }, true);
}



for (const notEmpty of [
  [1,2,3],
  ['a','b','c'],
  [,,,,1,,,,,],
  [,,,,0,,,,,],
  [,,null,undefined,false,0],
  [,,null,undefined,false,''],
]){
  assert.strictEqual(arrayOfNone(notEmpty), false, notEmpty.toString());
}


for (const empty of [
  [,,,],
  ['','',''],
  [,,,,'',,,,,],
  [,,null,undefined,''],
]){
  assert.strictEqual(arrayOfNone(empty), true, empty.toString());
}

