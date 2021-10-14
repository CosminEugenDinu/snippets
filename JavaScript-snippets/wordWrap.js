
function wordWrap(str, lineLen) {
  const wordRe = /[\S\n]+/g;
  const newStr = [];
  let wordMatch = wordRe.exec(str);
  let row = 1;
  while (wordMatch) {
    if (wordRe.lastIndex < lineLen * row ) {
      newStr.push(wordMatch[0]);
    } else {
      newStr.push('\n' + wordMatch[0]);
      row ++;
    }
    wordMatch = wordRe.exec(str)
  }
  return newStr.join(' ');
}


function wordWrap(str, lineLen) {
	let chars = 0;
	return str.match(/[\S\n]+/g).map(word => {
		chars += word.length + 1;
		if (chars > lineLen) {
			chars = 0;
			return '\n' + word;
		}
		return word 
	}).join(' ');
}


function wordWrap(str, lineLen) {
  const formated = [];
  let lastInserted_i = 0,
    lastSpace_i = 0,
    charCount = 0,
    rowCharCount= 0;
  for (let char of str) {
    if (char === " ") lastSpace_i = charCount;
    if (rowCharCount++ > lineLen) {
      formated.push(str.slice(lastInserted_i, lastSpace_i));
      lastInserted_i = lastSpace_i;
      rowCharCount = 0;
    }
    charCount++
  }
  formated.push(str.slice(lastInserted_i);
  // for (let row of formated) console.log(row.length)
  return formated.join`\n`;
}


function wordWrap(str, lineLen=70) {
  const newStrArr = [];
  const words = str.split(' ');
  let rowCharCount = 0;
  for (const word of words) {
    const w = word.replace('\n', '');
    if (w.length < word.length && rowCharCount < lineLen) {
      rowCharCount = 0;
    }
    if (rowCharCount + w.length > lineLen) {
      newStrArr.push('\n');
      rowCharCount = 0;
    } else {
      newStrArr.push(word + ' ');
      rowCharCount += word.length + 1;
    }
  } 
  return newStrArr.join``;
}


function wordWrap(str, lineLen=30) {
  const newStrArr = [];
  const lines = str.split('\n');
  for (const line of lines) {
    if (line.length <= lineLen) {
      newStrArr.push(line);
    } else {
      const words = line.split(/[ \t]/);
      const newLineArr = [];
      let rowCharsCount = 0;

      words.forEach(w => {
        rowCharsCount += `${w} `.length;
        if (rowCharsCount <= lineLen) {
          newLineArr.push(w);
        } else {
          newStrArr.push(newLineArr.join` `);
          newLineArr.length = 0;
          rowCharsCount = 0;
        }
      });
    }
  }
  return newStrArr.join`\n`;
}



