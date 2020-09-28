
const assert = require('assert');

function rawToMap(rawData){
  const data = new Map();
  const fields = new Map();
  const objects = new Map();

  data.set("fields", fields);
  data.set("objects", objects);
  
  rawData[0].forEach(
    fieldName => {
      data.get("fields").set(fieldName, []);
    }
  );
  
  let row_i = 0;
  while (++row_i < rawData.length){
    
    const fields = data.get('fields');
    const object = new Map();
    const pk = rawData[row_i][0]; // primary key

    rawData[0].forEach(
      (fieldName, col_i) => {

        // field
        fields.get(fieldName).push(rawData[row_i][col_i]);

        // object
        object.set(fieldName, rawData[row_i][col_i]);
        
      }
    );

    data.get('objects').set(pk, object);
    
  }

  return data;
}


function test(){
  const equal = assert.deepStrictEqual;

  const rawData = [
    ["id", "i", "val"],
    ["01", 1, "a"],
    ["02", 2, "b"],
    ["03", 3, "c"]
  ];

  const rawMap = rawToMap(rawData);
  
  equal(Array.from(rawMap.get('fields').keys()), ['id', 'i', 'val']);
  equal(rawMap.get('fields').get('id'), ['01', '02', '03']);
  equal(rawMap.get('fields').get('i'), [1, 2, 3]);
  equal(rawMap.get('fields').get('val'), ['a', 'b', 'c']);

  equal(rawMap.get('objects').get('01').get('id'), '01');
  equal(rawMap.get('objects').get('01').get('i'), 1);
  equal(rawMap.get('objects').get('01').get('val'), 'a');
  equal(rawMap.get('objects').get('02').get('val'), 'b');
  equal(rawMap.get('objects').get('03').get('i'), 3);
  equal(rawMap.get('objects').get('03').get('val'), 'c');
  

}
test()
