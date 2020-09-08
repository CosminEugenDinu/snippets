
/**
 * Algorithm to convert JSON-like object to tree of Map instances.
 * Leaves are of type {Object}.
 * 
 * @param {Object} obj - JSON-like object
 * @param {Array} leafKeys - array of {string}, keys in obj that stores leaves 
 * @returns {Map} mapTree - a tree of Map instances, having {Object} leaves 
 */

function objToMap(obj, leafKeys){

  const mapTree = new Map();

  for (const key in obj){
    if (leafKeys.includes(key)){
      console.log(`${key} is a leaf key`);
      const leafObj = obj[key];
      mapTree.set(key, leafObj);

    } else if (isObject(obj[key])){
      console.log(`${key} is a key`);
      const subTree = objToMap(obj[key], leafKeys);
      mapTree.set(key, subTree);
    }
      
  }
  return mapTree;
}

testObjToMap(testObj(), ['label', 'target']);


/* -----------------------------------------------------------------------
* library
*/

function testObjToMap(obj, leafKeys){
  const mapTree = objToMap(obj, leafKeys);
  console.log('mapTree from test');
  console.dir(mapTree);
}

function isObject(type){
  return typeof(type) === 'object' && type.constructor.name === 'Object';
}


function testObj(){
  const LABEL_STYLE = {fontSize:8, horizontalAlignment:'center', verticalAlignment:'middle', background:'lightgray', borders:[true, true, true, true, true, true]};
  /**
   * obj {Object} - JSON-like JavaScript object
   * leafs are objects stored at keys "label" and "target"
   */
  const obj = {
    _layoutRange:[1,1,50,6],
    _columnWidths:[75,80,20,250,80,80],
    companyName:{
      label:{cell:[2,2], value:"Societatea",
        style:{fontSize:8, fontWeight:"bold", horizontalAlignment:'left'}},
      target:{cell:[2,4]}},
    tax_id:{
      label:{cell:[3,2], value:"CUI",
        style:{fontSize:8, fontWeight:'bold', horizontalAlignment:'left'}},
      target:{cell:[3,4],
        style:{horizontalAlignment:'left'}}},
    reg_num:{
      label:{cell:[4,2], value:"Nr. Reg. Com.:", 
        style:{fontSize:8, fontWeight:'bold', horizontalAlignment:'left'}},
      target:{cell:[4,4]}},
    title:{
      label:{cell:[8,2], value:"REGISTRUL DE CASA", offset:[2,4],
        style:{fontSize:12, fontWeight:'bold', horizontalAlignment:'center', verticalAlignment:'middle'}}},
    document:{
      label:{cell:[11,1], value:"Document", offset:[1, 3],
        style:LABEL_STYLE}},
    explanations:{
      label:{cell:[11,4], value:"EXPLICATII", offset:[2,1],
        style:LABEL_STYLE}},
    input:{
      label:{cell:[11,5], value:"INCASARI", offset:[2,1],
        style:LABEL_STYLE}},
    output:{
      label:{cell:[11,6], value:"PLATI", offset:[2,1],
        style:LABEL_STYLE}},
    date:{
      label:{cell:[12,1], value:"DATA",
        style:LABEL_STYLE}},
    ref:{
      label:{cell:[12,2], value: "NR",
        style:LABEL_STYLE}},
    doc_type:{
      label:{cell:[12,3], value:"TIP",
      style:LABEL_STYLE}},
    previous_balance:{
      label:{cell:[13,4], value:"SOLD LUNA/ZIUA PRECEDENTA"},
      target:{cell:[13,4]}},
    record:{
      data:{
        target:{cell:[14,1]},
      },
      ref:{
        target:{cell:[14,2]},
      },
      doc_type:{
        target:{cell:[14,3]},
      }},
    total:{
      label:{cell:[15,4],value:"Total la data de {}:"}},
    day_balance:{
      label:{cell:[15,5],value:"Sold la data de {}:"}},

  };
  
  return obj;

}
