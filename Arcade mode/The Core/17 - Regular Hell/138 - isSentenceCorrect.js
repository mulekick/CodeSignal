function isSentenceCorrect(sentence) {
  var re = /^[A-Z]{1}[^.?!]*[.?!]$/g;
  return re.test(sentence);
}