
const getType = require('./get_type.js');

/**
 * Arguments validator
 */
function argumentsValidator(){
  // variable enclosed by setArgTypes function
  const _argTypes = [];

  const setArgTypes = (...argTypes)=>argTypes.forEach(
    type =>{
      if (typeof type !== 'string')
        throw new TypeError(`Type descriptor ${typeof type} is not valid`);
      _argTypes.push(type);
      }
  );
  
  const validateArgs = (...currArgs) => {
    if (currArgs.length !== _argTypes.length){
      throw new TypeError('Wrong number of arguments');
    }
    _argTypes.forEach((type, i) =>{
      const currArg = currArgs[i];
      if (getType(currArg) !== type){
        const err = new TypeError('Invalid Signature');
        err.expectedType = _argTypes[i];
        throw err;
      }
    });
  }; 
  // returns setter and validator closure functions
  return [setArgTypes, validateArgs];

} // argumentsValidator END

module.exports = argumentsValidator;
