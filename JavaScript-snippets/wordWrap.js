
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
