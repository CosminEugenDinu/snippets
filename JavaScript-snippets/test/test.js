#!/usr/bin/env node

const assert = require('assert');
const getType = require('../get_type.js');



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
