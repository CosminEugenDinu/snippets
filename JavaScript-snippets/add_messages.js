#!/usr/bin/env node

const assert = require('assert');

/**
 * Takes function object, adds own property 'messages',
 * and returns closure (used to add debugging messages).
 *
 * @param {function} procedure
 *
 * @return {function} addMessage
 * @prop {Map} procedure.messages
 */
function addMessages(procedure){
  if (typeof procedure !== 'function')
    throw new TypeError(`${procedure.name} is not function`);

  procedure.messages = new Map();

  const addMessage = message =>
    procedure.messages.has(message) ?
      ++procedure.messages.get(message)[0] :
      procedure.messages.set(message,[1]);

  return addMessage;
}



function test(){

  function someProcedure(...args){
    const addMessage = addMessages(someProcedure);

    addMessage(`I was called with first arg: ${args[0]}`);
    
    // do some work
    addMessage('I\'m done');
    return;
  }

  someProcedure('arg1');

  expectedMessages = new Map();
  expectedMessages.set(`I was called with first arg: arg1`,[1]);
  expectedMessages.set('I\'m done',[1]);

  assert.deepStrictEqual(someProcedure.messages, expectedMessages); 
}
test()


