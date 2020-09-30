


function setCreation(values, times){
  const start = Date.now();

  let count = 0;
  while(++count < times){
    const s = new Set();
    for (const val of values)
      s.add(val);
  }

  return Date.now() - start;
}

function mapCreation(values, times){
  const start = Date.now();

  let count = 0;
  while(++count < times){
    const m = new Map();
    for (const val of values)
      m.set(val, val);
  }

  return Date.now() - start;
}

function arrayCreation(values, times){
  const start = Date.now();

  let count = 0;
  while(++count < times){
    const a = [];
    for (const val of values)
      a.push(val);
  }

  return Date.now() - start;
}

function objectCreation(values, times){
  const start = Date.now();

  let count = 0;
  while(++count < times){
    const o = {};
    for (const val of values)
      o[val] = val;
  }

  return Date.now() - start;
}

function setLookup(values, lookfor){
  const start = Date.now();
  
  const s = new Set();
  for (const val of values)
    s.add(val);
  const found = s.has(lookfor);

  return Date.now() - start;
}

function mapLookup(values, lookfor){
  const start = Date.now();
  
  const m = new Map();
  for (const val of values)
    m.set(val, val);
  const found = m.has(lookfor);

  return Date.now() - start;
}

function arrayLookup(values, lookfor){
  const start = Date.now();
  
  const a = [];
  for (const val of values)
    a.push(val);
  const found = a.includes(lookfor);

  return Date.now() - start;
}

function arrayLookupByIndex(values, index){
  const start = Date.now();
  
  const a = [];
  for (const val of values)
    a.push(val);
  const found = a[index];

  return Date.now() - start;
}

function objectLookup(values, lookfor){
  const start = Date.now();
  
  const o = {};
  for (const val of values)
    o[val] = val;
  const found = o[lookfor];

  return Date.now() - start;
}


// few values
const few = ['number','string','object'];
// lots of values
const aLot = [];
for (let i=0; i < 1000000; i++)
  aLot.push('string'+i);

const times = 100000;
console.log(times,'first set creation done in',setCreation(few,times)); 
console.log();
console.log(times,'array  creation done in',arrayCreation(few,times)); 
console.log(times,'set    creation done in',setCreation(few,times)); 
console.log(times,'map    creation done in',mapCreation(few,times)); 
console.log(times,'object creation done in',objectCreation(few,times)); 
console.log();
console.log('set    "has" lookup done in',
  setLookup(aLot, aLot[aLot.length-1])); 
console.log('map    "has" lookup done in',
  mapLookup(aLot, aLot[aLot.length-1])); 
console.log('array  "includes" lookup done in',
  arrayLookup(aLot, aLot[aLot.length-1])); 
console.log('array  "[i]" lookup done in',
  arrayLookupByIndex(aLot, aLot.length-100)); 
console.log('object "[prop]" lookup done in',
  objectLookup(aLot,aLot[aLot.length-1])); 
console.log();

