function eyeRhyme(pairOfLines) {
  var re = new RegExp("([\\w|\\W|\\s]{3})\t[\\w|\\W|\\s]*([\\w|\\W|\\s]{3})");
  var match = re.exec(pairOfLines);
  return match[1] == match[2];
}

//Shorthand for the same result ...
//var re = new RegExp("^.*(.{3})\t.*(.{3})$");