function swapAdjacentWords(s) {
  return s.replace(/([A-Za-z]+)\s([A-Za-z]+)/g, "$2 $1");
}

/*
Efficient Regex technique (parentheses and indexed matches)

function swapAdjacentWords(s) {
  return s.replace(/(\S+)( +)(\S+)/g, '$3$2$1');
}
*/