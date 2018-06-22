function repetitionEncryption(letter) {
  var pattern = new RegExp("(?:^|[^a-zA-Z]{1})([a-zA-Z]+)[^a-zA-Z]+\\1(?:[^a-zA-Z]{1}|$)", "gi") ;
  var matches = letter.match(pattern);
  if (matches) {
    return matches.length;
  }
  else {
    return 0;
  }
}