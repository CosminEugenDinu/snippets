
/**
 * @param {*} obj
 * @returns {string}
 */
function getType(obj){
  if (obj === null)
    return 'null';
  if (obj === undefined)
    return 'undefined';
  if (Object.is(obj, NaN))
    return 'nan';
  if (Object.is(obj, Boolean(obj)))
    return 'boolean';
  if (typeof obj === 'object')
    // returns 'Object', 'Array', 'Map', 'Set', etc
    return obj.constructor.name;
  if (typeof obj === 'function')
    // returns 'Function'
    return obj.constructor.name;
  // returns 'number', 'string'
  return typeof obj;
}


module.exports = getType;
