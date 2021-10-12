
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


function wordWrap(str, lineLen=80) {
  const words = str.split(' ');
  const newStrArr = [];
  let rowCharCount = 0;
  for (let word of words) {
    if (rowCharCount+word.length > lineLen - word.length) {
      newStrArr.push('\n' + word)
      rowCharCount = 0;
    } else {
      newStrArr.push(word + ' ');
      rowCharCount += word.length + 1;
    }
  }
  return newStrArr.join``;
}
