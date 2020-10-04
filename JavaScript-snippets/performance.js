


function setCreation(times){
  const start = Date.now();
  let count = 0;
  while(++count < times){
    const s = new Set();
  }
  const time = Date.now() - start;
  console.log(`${times} new Set() created  in ${time}`);
}

function mapCreation(times){
  const start = Date.now();
  let count = 0;
  while(++count < times){
    const m = new Map();
  }
  const time = Date.now() - start;
  console.log(`${times} new Map() created  in ${time}`);
}

function arrayCreation(times){
  const start = Date.now();
  let count = 0;
  while(++count < times){
    const a = [];
  }
  const time = Date.now() - start;
  console.log(`${times} array [] created  in ${time}`);
}

function objectCreation(times){
  const start = Date.now();
  let count = 0;
  while(++count < times){
    const o = {};
  }
  const time = Date.now() - start;
  console.log(`${times} object {} created  in ${time}`);
}

function setLookup(values, lookfor){
  const s = new Set();
  let start = Date.now(); 
  for (const val of values)
    s.add(val);
  console.log(values.length+' values added on Set in '+(Date.now()-start));

  start = Date.now();
  const found = s.has(lookfor);
  console.log(`Set lookup for one value in ${Date.now() - start}`);

  start = Date.now();
  for (const val of values){
    const found = s.has(val);
  }
  console.log(`Set lookup for ${values.length} values in ${Date.now() - start}`);
}

function mapLookup(values, lookfor){
  const m = new Map();
  let start = Date.now(); 
  for (const val of values)
    m.set(val, val);
  console.log(values.length+' values added on Map in '+(Date.now()-start));

  start = Date.now();
  const found = m.has(lookfor);
  console.log(`Map lookup for one value in ${Date.now() - start}`);

  start = Date.now();
  for (const val of values){
    const found = m.has(val);
  }
  console.log(`Map lookup for ${values.length} values in ${Date.now() - start}`);
}

function arrayLookupByIncludes(values, lookfor){
  const a = [];
  let start = Date.now();
  for (const val of values)
    a.push(val);
  console.log(values.length+' values added on Array in '+(Date.now()-start));

  start = Date.now();
  const found = a.includes(lookfor);
  console.log(`Array "includes" lookup for one value in ${Date.now() - start}`);

  start = Date.now();
  for (const val of values){
    const found = a.includes(val);
  }
  console.log(`Array "includes" lookup for ${values.length} values in ${Date.now() - start}`);
  
  const fromIndex = 10000;
  const toIndex = 0;
  start = Date.now();
  for (let i=fromIndex; i>toIndex; i--){
    const found = a.includes(values[i]);
  }
  console.log(`Array "includes" inverse lookup for ${fromIndex-toIndex} values in ${Date.now() - start}`);
}

function arrayLookupByIndexOf(values, lookfor){
  const a = [];
  let start = Date.now() 
  for (const val of values)
    a.push(val);
  console.log(values.length+' values added on Array in '+(Date.now()-start));

  start = Date.now();
  const found = a.indexOf(lookfor);
  console.log(`Array "indexOf" lookup for one value in ${Date.now() - start}`);

  start = Date.now();
  for (const val of values){
    const found = a.indexOf(val);
  }
  console.log(`Array "indexOf" lookup for ${values.length} values in ${Date.now() - start}`);

  const fromIndex = 10000;
  const toIndex = 0;
  start = Date.now();
  for (let i=fromIndex; i>toIndex; i--){
    const found = a.indexOf(values[i]);
  }
  console.log(`Array "indexOf" inverse lookup for ${fromIndex-toIndex} values in ${Date.now() - start}`);
}

function arrayLookupByIndex(values, index){
  const a = [];
  let start = Date.now(); 
  for (const val of values)
    a.push(val);
  console.log(values.length+' values added on Array in '+(Date.now()-start));

  start = Date.now();
  const found = a[values.length-2];
  console.log(`Array "[i]" lookup for one value in ${Date.now() - start}`);

  start = Date.now();
  let i = 0;
  for (const val of values){
    const found = a[i++];
  }
  console.log(`Array "[i]" lookup for ${values.length} values in ${Date.now() - start}`);
}

function objectLookup(values, lookfor){
  const o = {};
  let start = Date.now(); 
  for (const val of values)
    o[val] = val;
  console.log(values.length+' values added on Object in '+(Date.now()-start));

  start = Date.now();
  const found = o[lookfor];
  console.log(`Object "[prop]" lookup for one value in ${Date.now() - start}`);

  start = Date.now();
  for (const val of values){
    const found = o[val];
  }
  console.log(`Object "[prop]" lookup for ${values.length} values in ${Date.now() - start}`);
}


// few values
const few = ['number','string','object'];
// lots of values
const longString = String.fromCharCode(...Array(500).fill(0).map((e,i)=>e+i));
const aLot = [];
for (let i=0; i < 10000000; i++)
  aLot.push(longString+i);
  //aLot.push(1000+i);

const times = 10000000;
setCreation(times); 
console.log();
arrayCreation(times); 
arrayCreation(times); 
setCreation(times); 
mapCreation(times); 
objectCreation(times);
console.log();
setLookup(aLot, aLot[aLot.length-1]); 
console.log();
console.log();
setLookup(aLot, aLot[aLot.length-1]); 
console.log();
mapLookup(aLot, aLot[aLot.length-1]); 
console.log();
setLookup(aLot, aLot[aLot.length-1]); 
console.log();
arrayLookupByIncludes(aLot, aLot[aLot.length-1]); 
console.log();
arrayLookupByIndexOf(aLot, aLot[aLot.length-100]);
console.log();
arrayLookupByIndex(aLot, aLot.length-100); 
console.log();
//objectLookup(aLot,aLot[aLot.length-1]); 
console.log();


