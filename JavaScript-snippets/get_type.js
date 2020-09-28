
/**
 * @param {*} obj
 * @returns {string}
 */
function getType(obj){
  if (obj === null)
    return 'null';
  if (obj === undefined)
    return 'undefined';
  if (typeof obj === 'object')
    // returns 'Object', 'Array', 'Map', 'Set', etc
    return obj.constructor.name;
  if (typeof obj === 'function')
    // returns 'Function'
    return obj.constructor.name;
  // returns 'number', 'string', 'boolean'
  return typeof obj;
}

module.exports = getType;
