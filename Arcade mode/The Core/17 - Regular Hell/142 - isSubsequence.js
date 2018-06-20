function isSubsequence(t, s) {
  var pattern = "";
  for (var i = 0; i < s.length; i++) {
    pattern += "["+s[i]+"]{1}[\\w|\\W]*" ;
  }
  var re = new RegExp(pattern);
  return re.test(t);
}