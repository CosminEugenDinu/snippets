
const getType = require('./get_type.js');
const argumentsValidator = require('./arguments_validator.js');


class FieldValidator{
  constructor(){
    this._fieldNames = new Map();
    this._fieldIndexes = new Map();
    this._validTypes = ['string', 'number', 'boolean', 'Date'];
  }
  /**
   * @param {string} fieldName
   * @param {number} fieldIndex
   * @param {string} fieldType
   * @param {*} [minValue]
   * @param {*} [maxValue]
   * @param {Set} [exactValues]
   */
  setField(fieldName, fieldIndex, fieldType, minValue, maxValue, exactValues){
    
    const [setArgTypes, validateArgs] = argumentsValidator();

    // number of actual parameters
    // last undefined actual parameters are excluded
    const paramLength = arguments.length;
    let lastArgIndex = paramLength;
    while (--lastArgIndex > 0){
      if (arguments[lastArgIndex] !== undefined) break;
    }
    const argsLength = lastArgIndex + 1;

    if (argsLength < 3)
      throw new TypeError('Invalid number of arguments');

    if (argsLength === 3)
      setArgTypes('string','number','string');
    else if (argsLength === 4){
      const minValueType = getType(minValue)==='null'?'null':fieldType;
      setArgTypes('string','number','string', minValueType);
    } else if (argsLength === 5){
      const minValueType = getType(minValue)==='null' ?
        'null':fieldType;
      const maxValueType = getType(maxValue)==='null' ?
        'null':fieldType;
      setArgTypes('string','number','string', minValueType, maxValueType);
    } else if (argsLength === 6){
      const minValueType = getType(minValue)==='null' ?
        'null':fieldType;
      const maxValueType = getType(maxValue)==='null' ?
        'null':fieldType;
      const typeOfLastArg = getType(exactValues)==='null' ?
        'null':'Set';
      const exactValuesType = (minValueType==='null' && maxValueType==='null') ?
        typeOfLastArg :'null';
      setArgTypes('string','number','string', minValueType, maxValueType, exactValuesType);
    }

    //setArgTypes('string','number','string',fieldType,fieldType,'Set');
    validateArgs(...arguments);

    const field = new Map();
    if (this._fieldNames.has(fieldName))
      throw new Error('fieldName already exists');
    if (this._fieldIndexes.has(fieldIndex))
      throw new Error('fieldIndex already exists'); 
    field.set('name', fieldName);
    field.set('index', fieldIndex);
    field.set('type', fieldType);

    if (minValue !== null && minValue !== undefined && exactValues === undefined)
      field.set('minValue', minValue);
    // set max value only if exactValues are not proviced
    if (maxValue !== null && maxValue !== undefined && exactValues === undefined)
      field.set('maxValue', maxValue);
    // throw if type of exactValues is not the same as fieldType
    if (exactValues !== null && exactValues !== undefined){
      for (const exactVal of exactValues.keys()){
        if (getType(exactVal) !== fieldType){
          const err = new TypeError('Invalid field exactType');
          err.fieldName = fieldName;
          err.expectedType = fieldType;
          err.currentType = getType(exactVal);
          throw err;
        }
      }
      field.set('exactValues', exactValues);
    }

    this._fieldNames.set(fieldName, field); 
    // cannot be tow fields with same index;
    this._fieldIndexes.set(fieldIndex, field);
    return this;
  }
  
  /**
   * @param {string} fieldName
   * @param {*} testValue
   */
  validate(fieldName, testValue){
    const [setArgTypes, validateArgs] = argumentsValidator();
    // validate arguments
    setArgTypes('string', getType(testValue));
    validateArgs(...arguments);

    class ValueError extends Error{
      constructor(msg){
        super(msg);
        this.name = 'ValueError';}}
    class NotFoundError extends Error{
      constructor(msg){
        super(msg);
        this.name = 'NotFoundError';}}

    if ( ! this._fieldNames.has(fieldName))
      throw new NotFoundError('Field not found');

    const field = this._fieldNames.get(fieldName);

    const valType = getType(testValue); 
    // test for type
    if (field.get('type') !== valType){
      const err = new TypeError('Invalid Value Type');
      err.fieldName = fieldName;
      err.expectedType = field.get('type');
      err.currentType = valType;
      throw err;
    }

    // test for value
    if(field.get('type') === 'Date'){
      // explicit test for invalid date
      if (Object.is(testValue.getTime(), NaN)){
        const err = new ValueError('Invalid Date Value');
        err.fieldName = fieldName;
        err.expectedValue = `something like ${new Date()}`;
        err.currentValue = testValue;
        throw err;
      }
    }
    if (field.has('minValue')){
      if (testValue < field.get('minValue')){
        const err = new ValueError('Value less than minValue');
        err.fieldName = fieldName;
        err.expectedValue = `>= ${field.get('minValue')}`;
        err.currentValue = `${testValue}`;
        throw err;
      }
    }
    if (field.has('maxValue')){
      if (testValue > field.get('maxValue')){
        const err = new ValueError('Value greater than maxValue');
        err.fieldName = fieldName;
        err.expectedValue = `<= ${field.get('maxValue')}`;
        err.currentValue = testValue;
        throw err;
      }
    }
    if (field.has('exactValues')){
      if ( ! field.get('exactValues').has(testValue)){
        const err = new ValueError('Value not found in exactValues Set');
        err.fieldName = fieldName;
        err.currentValue = testValue;
        throw err;
      }
    }
    
    return true;
  }
  getFieldByName(fieldName){
    return this._fieldNames.get(fieldName);
  }
  getFieldByIndex(fieldIndex){
    return this._fieldIndexes.get(fieldIndex);
  }
}

module.exports = FieldValidator;


