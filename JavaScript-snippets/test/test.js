#!/usr/bin/env node

const assert = require('assert');

const getType = require('../get_type.js');
const argumentsValidator = require('../arguments_validator.js');



const tests = new Map();

tests.set('getType', () => {

  // primitive types
  const _number = 1;
  const _string = 'some string literal';
  const _boolean = true;
  const _null = null;
  const _undefined = undefined;
  // structural types
  const _function = function(){};
  const _array = [];
  const _object = {};
  const _map = new Map();
  const _set = new Set();
  assert.strictEqual(getType(_number), 'number');
  assert.strictEqual(getType(_string), 'string');
  assert.strictEqual(getType(_boolean), 'boolean');
  assert.strictEqual(getType(_null), 'null');
  assert.strictEqual(getType(_undefined), 'undefined');
  assert.strictEqual(getType(_function), 'Function');
  assert.strictEqual(getType(_array), 'Array');
  assert.strictEqual(getType(_object), 'Object');
  assert.strictEqual(getType(_map), 'Map');
  assert.strictEqual(getType(_set), 'Set');
});
tests.get('getType')();


tests.set('argumentsValidator', () => {
  const [setArgTypes, validateArgs] = argumentsValidator();

  assert.throws(()=>{setArgTypes(1,'string')},
    {name:'TypeError'}, "setArgTypes can be called only with strings");

  function InvalidType(){};
  const someValidArgs = ['str',1,true,{},[],new Map(),new Set(),new Date()];

  // proper definition of function using argumentsValidator
  function funcDef(s,n,b,O,A,M,S,D){
    const [setArgTypes, validateArgs] = argumentsValidator();
    setArgTypes('string','number','boolean','Object','Array','Map','Set','Date');
    validateArgs(...[...arguments]);
    const body = "rest of the body of the function definition";
  }
  // test for normal valid arguments
  assert.doesNotThrow(()=>{funcDef(...someValidArgs);});
  // test for wrong number of arguments
  assert.throws(()=>{
    const fewerArgs = someValidArgs.slice(0, -1);
    const moreArgs = [...someValidArgs,new Date()];
    funcDef(...fewerArgs);
    funcDef(...moreArgs);
    },{name:'TypeError',});
  // test for wrong type of one argument
  someValidArgs.map((arg, i) =>{
    const currArgType = typeof arg==='object'?arg.constructor.name:typeof arg;
    const oneInvalidType = [...someValidArgs];
    oneInvalidType[i] = new InvalidType();
      assert.throws(()=>{
        funcDef(...oneInvalidType);
        },{name:'TypeError', expectedType: currArgType});
    });
});
tests.get('argumentsValidator')();


