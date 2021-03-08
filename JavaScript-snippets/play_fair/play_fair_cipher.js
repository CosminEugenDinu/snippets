#!/usr/bin/env node

// const s = "cozy lummox gives smart squid who asks for job pen";
// const s = 'Jackdaws love my big sphinx of quartz'
// const s = 'PhPrVCYuHYxc BRbTaxdN zy vb'
const s = 'DfHZjKvqVpT  i Ni lvg j D Xd ybS  nmRKDoZB vLWHkLZ sn T z  E NPBTJDQfQUTPUUK W udaxOzSj PBqOJFrqbPJq  wPOqwbOTYLCzhwK eP E Gde OGKsRO   fNIM M wmD sjRhofG'
// const key = "playfair jexample";
// const key = 'dd LwvxwN l EUeRt tTKZqchjU  sRUKslc cxNtHgtUnlGvntX  zBMKep';
const key = 'IaBowOvb C   YHQXS  VPikMpp Vm  yoy  DZzTClU  BU y c X  QkGLWwA Wef robVW  cakL';

function encipher(s, key) {
  // your code here
  
  console.log('Key is:\n', key, '\n');
  const keyMatrix = generateMatrix(key);
  printMatrix(keyMatrix);

  const s_array = [];
  for (const character of s) {
    s_array.push(character.toLowerCase());
  }

  // hash map composed of index -> character
  const s_indexes = s_array.reduce((indexes, character, index) => {
    indexes.set(index, character);
    return indexes;
  }, new Map()) 
  
  console.log('Step 0 - original string:\n', s);

  const s_arrayWithoutSpaces = s_array.filter(character => character !== ' ');
  console.log('Step 1 - discard spaces:\n', s_arrayWithoutSpaces.join(''));

  // insert Xs between contiguous letters, like 'dd' -> 'dxd'
  const s_arrayWith_Xs = add_Xs(s_arrayWithoutSpaces);
  console.log('Step 2, 3 - insert Xs:\n', s_arrayWith_Xs.join(''));

  // break text into pairs  
  const s_pairs = makePairs(s_arrayWith_Xs);
  console.log('Step 4 - pairs:\n', s_pairs.map(pair => pair.join('')).join(' '));
  
  const s_pairs_I_or_J = replace_I_or_J(s_pairs);

  // replace pairs with corresponding ciphered pairs from matrix
  const s_pairsCiphered = cipherPairs(s_pairs_I_or_J, keyMatrix);
  console.log('Step 5 - cipher pairs:\n', s_pairsCiphered.map(pair => pair.join('')).join(' '))
  // console.log('Ref ciphered pairs:\n', 'dn wf rl im es gq et mo mq ef iu ks tr gv ds fo nk as er kd ai');
  
  const builtCiphered = buildPairsCiphered(s_pairsCiphered, s_indexes, s_arrayWithoutSpaces);
  console.log('Step 6 - built ciphered string:\n', builtCiphered);
  
  return builtCiphered;
}




/********************* LIBRARY *********************/
  

function generateMatrix(key) {
  
  // unique letters of key-string
  const uniques = new Map();

  // include letters from key once, uppercase, without spaces and re-index them
  let newIndex = 0;
  for (const character of key.toUpperCase()) {
    // if character is already in set, pass over it to preserve it's first index
    if (uniques.has(character)) continue; 
    // do not include in set empty space
    if (character === ' ') continue; 
    // if set already contains a 'I' do not include current 'J'
    if (character === 'J' && uniques.has('I')) continue;
    // if set already contains a 'J' do not include current 'I'
    if (character === 'I' && uniques.has('J')) continue;
    uniques.set(character, newIndex ++ );
  }

  // add the rest of alphabet, but only up to index 24 (last index of matrix)
  // 25 is the max length of alphabet without a 'J' or 'I' (I/J)
  let alphabetIndex = uniques.size;
  const [A, Z] = [65, 90];
  let charCode = A;
  while(charCode <= Z) {
    const character = chr(charCode ++ );
    // if character is already in set, pass over it to preserve existing index
    if (uniques.has(character)) continue;
    // if set already contains a 'I' do not include current 'J'
    if (character === 'J' && uniques.has('I')) continue;
    // if set already contains a 'J' do not include current 'I'
    if (character === 'I' && uniques.has('J')) continue;

    uniques.set(character, alphabetIndex ++ );
  }

  const matrix = Array(25);
  // fill matrix
  for (const [character, index] of uniques) {
    matrix[index] = character;
  }

  return matrix;
}

function printMatrix(matrix) {
  const formatedMatrix = [];
  let i = 0;
  while(i < matrix.length) {
    ((i+1) % 5 === 0) &&
    formatedMatrix.push(' ', matrix[i].toString(), '\n') ||
    formatedMatrix.push(' ', matrix[i].toString());
    i ++;
  } 
  console.log(formatedMatrix.join(''));
}

function add_Xs(s_array) {
  const s_arrayWith_Xs = [s_array[0]];
  let index = 1;
  while (index < s_array.length) {
    const currChar = s_array[index];
    const prevChar = s_array[index-1];
    if (prevChar === currChar) {
      s_arrayWith_Xs.push('x', currChar);
    } else {
      s_arrayWith_Xs.push(currChar);
    }
    index ++;
  }
  // make it even
  if (s_arrayWith_Xs.length % 2 !== 0) {
    s_arrayWith_Xs.push('x');
  }
  return s_arrayWith_Xs;
}

function makePairs(s_array) {
  const pairs = [];
  let curr_i = 0;
  let next_i = 1;
  while(next_i < s_array.length) {
    const pair = [s_array[curr_i], s_array[next_i]];
    pairs.push(pair);
    curr_i += 2;
    next_i = curr_i + 1; 
  }
  return pairs;
}

function replace_I_or_J(s_pairs) {
  const s_pairs_I_or_J = [];
  let I_found = false;
  let J_found = false;
  for (const [first, second] of s_pairs) {
    if (first === 'i' || second === 'i') {
      I_found = true;
      break;
    } else if (first === 'j' || second === 'j') {
      J_found = true;
      break;
    }
  }
  
  for (const pair of s_pairs) {
    const [first, second] = pair;
    let newPair = []; 
    let newFirst = first, newSecond = second;
    if (I_found) {
      if (first === 'j') {
        newFirst = 'i';
      }
      if (second == 'j') {
        newSecond = 'i';
      }
      newPair = [newFirst, newSecond];
    } else if (J_found) {
      if (first === 'i') {
        newFirst = 'j';
      }
      if (second === 'i') {
        newSecond = 'j';
      }
      newPair = [newFirst, newSecond];
    } else {
      newPair = [first, second]
    }
    s_pairs_I_or_J.push(newPair);
    newPair = [];
  }

  return s_pairs_I_or_J;
}

function cipherPairs(s_pairs, keyMatrix) {

  const rows = 5, columns = 5;
  
  const s_pairsCiphered = [];
  for (const pair of s_pairs) {
    const matrixIndexes = getMatrixIndices(pair, keyMatrix);
    const relation = calculateRelation(matrixIndexes, rows, columns);
    let replacementPair = []; 
    if (relation === 'SAME_ROW') {
      replacementPair = replaceSameRow(matrixIndexes, keyMatrix, rows, columns);
    }
    else if (relation === 'SAME_COLUMN') {
      replacementPair = replaceSameColumn(matrixIndexes, keyMatrix, rows, columns); 
    }
    else if (relation === 'DIAGONAL') {
      replacementPair = replaceDiagonal(matrixIndexes, keyMatrix, rows, columns); 
    }
    if (replacementPair.length === 2) {
      s_pairsCiphered.push(replacementPair);
    } else {
      throw 'Something went wrong'
    }
  }

  return s_pairsCiphered;
}

function getMatrixIndices(pair, keyMatrix) {
  // convert keyMatrix array to hash map like 'A' -> 0 (char -> index)
  const keyMatrix_charMap = keyMatrix.reduce((hashMap, char, index) => {
    hashMap.set(char, index);
    return hashMap;
  }, new Map());
  
  let firstIndex = keyMatrix_charMap.get(pair[0].toUpperCase());
  let secondIndex = keyMatrix_charMap.get(pair[1].toUpperCase());

  if (pair[0] === 'i' || pair[0] === 'j') {
    const I_index = keyMatrix_charMap.get('I');
    const J_index = keyMatrix_charMap.get('J');
    if (I_index !== undefined) {
      firstIndex = I_index;
    } else if (J_index !== undefined) {
      firstIndex = J_index;
    }
  }
  if (pair[1] === 'i' || pair[1] === 'j') {
    const I_index = keyMatrix_charMap.get('I');
    const J_index = keyMatrix_charMap.get('J');
    if (I_index !== undefined) {
      secondIndex = I_index;
    } else if (J_index !== undefined) {
      secondIndex = J_index;
    }
  }
  
  return [firstIndex, secondIndex];
}

function calculateRelation(matrixIndexes, numOfRows, numOfColumns) {
  // possible relations are:
  const SAME_ROW = 'SAME_ROW';
  const SAME_COLUMN = 'SAME_COLUMN';
  const DIAGONAL = 'DIAGONAL';
  
  // const matrixLength = numOfRows * numOfColumns;
  const [first_i, second_i] = matrixIndexes;
  const col1_i = first_i % numOfColumns;
  const row1_i = (first_i - col1_i)/numOfRows;
  const col2_i = second_i % numOfColumns;
  const row2_i = (second_i-col2_i)/numOfRows;
  
  if (row1_i === row2_i) return SAME_ROW;
  if (col1_i === col2_i) return SAME_COLUMN;
  return DIAGONAL;
}

function replaceSameRow(matrixIndexes, keyMatrix, numOfRows, numOfColumns) {
  const [first_i, second_i] = matrixIndexes;
  const col1_i = first_i % numOfColumns;
  const row1_i = (first_i - col1_i)/numOfRows;
  const col2_i = second_i % numOfColumns;
  const row2_i = (second_i-col2_i)/numOfRows;

  if (row1_i !== row2_i) {
    throw new Error('Not on the same row');
  }

  const rightOfFirst_i = row1_i * numOfColumns + (first_i + 1) % numOfRows;
  const rightOfSecond_i = row1_i * numOfColumns + (second_i + 1) % numOfRows;
  const replacementPair = [
    keyMatrix[rightOfFirst_i].toLowerCase(),
    keyMatrix[rightOfSecond_i].toLowerCase()
  ];
  return replacementPair;  
}

function replaceSameColumn(matrixIndexes, keyMatrix, numOfRows, numOfColumns) {
  const [first_i, second_i] = matrixIndexes;
  const col1_i = first_i % numOfColumns;
  const row1_i = (first_i - col1_i)/numOfRows;
  const col2_i = second_i % numOfColumns;
  const row2_i = (second_i-col2_i)/numOfRows;

  if (col1_i !== col2_i) {
    throw new Error('Not on the same column');
  }

  const beneathOfFirst_i = ((row1_i + 1) % numOfRows) * numOfColumns + col1_i;
  const beneathOfSecond_i = ((row2_i + 1) % numOfRows) * numOfColumns + col2_i;
  const replacementPair = [
    keyMatrix[beneathOfFirst_i].toLowerCase(),
    keyMatrix[beneathOfSecond_i].toLowerCase()
  ];
  return replacementPair;  
}


function replaceDiagonal(matrixIndexes, keyMatrix, numOfRows, numOfColumns) {
  const [first_i, second_i] = matrixIndexes;
  const col1_i = first_i % numOfColumns;
  const row1_i = (first_i - col1_i)/numOfRows;
  const col2_i = second_i % numOfColumns;
  const row2_i = (second_i-col2_i)/numOfRows;

  if (row1_i === row2_i || col1_i === col2_i) {
    throw new Error('Not on diagonal');
  }
  const adjacentOfFirst_i = row1_i * numOfColumns + col2_i;
  const adjacentOfSecond_i = row2_i * numOfColumns + col1_i;
  const replacementPair = [
    keyMatrix[adjacentOfFirst_i].toLowerCase(),
    keyMatrix[adjacentOfSecond_i].toLowerCase()
  ];
  return replacementPair;  
}

function buildPairsCiphered(s_pairsCiphered, s_indexes) {

  const s_cipheredFlattened = s_pairsCiphered.map(pair => pair.join('')).join('');
  const s_arrayWithoutSpaces = [];
  let s_withoutSpaces_index = 0;
  const cipheredStringArray = Array(s_indexes.size);
  const cipheredStringArrayWithoutSpaces = [];
  for (const [index, character] of s_indexes.entries()){
    if (character === ' ') {
      cipheredStringArray[index] = ' ';
    } else {
      s_arrayWithoutSpaces.push(character);
      const cipheredCharacter = s_cipheredFlattened[s_withoutSpaces_index].toUpperCase();
      cipheredStringArray[index] = cipheredCharacter;
      cipheredStringArrayWithoutSpaces.push(cipheredCharacter)
      s_withoutSpaces_index ++;
    }
  }
  
  let lastInsertedCharIndex = cipheredStringArrayWithoutSpaces.length;
  while(lastInsertedCharIndex < s_cipheredFlattened.length) {
    cipheredStringArray.push(s_cipheredFlattened[lastInsertedCharIndex].toUpperCase())
    lastInsertedCharIndex ++;
  }
  
  return cipheredStringArray.join('');
}

/****************** LIBRARY END ******************/

/********************* TOOLS *********************/
function chr(asciiCode) {
  return String.fromCharCode(asciiCode);
}
/***************** TOOLS END *********************/

encipher(s, key);
exports.default = encipher;