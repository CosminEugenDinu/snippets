
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
  setField(fieldName, fieldIndex, fieldType, minValue, maxValue, exactValues,sentinel){
    
    const [setArgTypes, validateArgs] = argumentsValidator();
    
    // setField is called with these arguments
    const currArgs = [
      fieldName, fieldIndex, fieldType, minValue, maxValue, exactValues,];
    // sentinel should be undefined to limit the number of arguments
    if (sentinel !== undefined) currArgs.push('wrong argument');

    // dynamic arguments types
    
    const null_undefined = ['null','undefined'];
    const isNone = typeStr => null_undefined.includes(typeStr);

    // required minValue type
    const minValueArgType = getType(minValue);
    const minValueType = isNone(minValueArgType) ?
      minValueArgType : fieldType;

    // required maxValue type
    const maxValueArgType = getType(maxValue);
    const maxValueType = isNone(maxValueArgType) ?
      maxValueArgType : fieldType;

    // required exactValues type
    const exactValuesArgType = getType(exactValues);
    // if both minValue and maxValue are null/undefined
    // then exactValues can be {Set} or null/undefined
    // else if either minValue or maxValue are not null/undefined
    // thin exactValues can be only null/undefined
    if (isNone(minValueType) && isNone(maxValueType)){
      if (isNone(exactValuesArgType))
        setArgTypes(
          'string','number','string',minValueType,maxValueType,exactValuesArgType,);
      else
        setArgTypes(
          'string','number','string',minValueType,maxValueType,'Set');
    } else {
      // here either minValueType or maxValueType are not none
      if (isNone(exactValuesArgType))
        setArgTypes(
          'string','number','string',minValueType,maxValueType,exactValuesArgType);
      else // here we got not none type for last arg (exactValues)
        // chosen default type for exactValues is 'undefined'
        setArgTypes(
          'string','number','string',minValueType,maxValueType,'undefined');
    }
    // validate all arguments ==================
    validateArgs(...currArgs);

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

    if ( ! this._fieldNames.has(fieldName)){
      const err = new NotFoundError('Field not found');
      err.fieldName = fieldName;
      throw err;
    }

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


