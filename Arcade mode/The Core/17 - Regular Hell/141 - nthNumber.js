function nthNumber(s, n) {
  var re = new RegExp("(?:\\d+\\D*){"+ (n - 1) +"}(?:[0]*)(\\d+)");
  return re.exec(s)[1];
}