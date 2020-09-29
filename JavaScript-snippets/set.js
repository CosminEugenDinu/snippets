
const assert = require('assert');

/**
 * creates {Set} from args
 */
const set = (...args) => args.reduce((set, arg)=>{
  set.add(arg);
  return set;
}, new Set());


const test = (set) => {
  const expectedSet = new Set();
  const values = [1, 2, 3, 3, 0];
  values.forEach(v => expectedSet.add(v));
  assert.deepStrictEqual(set(...values), expectedSet);
};
test(set);




