
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
      const err = new TypeError('Wrong number of arguments');
      err.currArgsLength = currArgs.length;
      err.expectedArgsLength = _argTypes.length;
      err.currArgsTypes = currArgs;
      err.expectedArgsTypes = _argTypes; 
      throw err;
    }
    _argTypes.forEach((type, i) =>{
      const currArg = currArgs[i];
      if (getType(currArg) !== type){
        const err = new TypeError('Invalid Signature');
        err.argIndex = i;
        err.argType = getType(currArg); 
        err.expectedArgType = type;
        throw err;
      }
    });
  }; 
  // returns setter and validator closure functions
  return [setArgTypes, validateArgs];
} // argumentsValidator END

module.exports = argumentsValidator;
