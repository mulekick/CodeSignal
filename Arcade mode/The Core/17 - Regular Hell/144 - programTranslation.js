function programTranslation(solution, args) {
  var argumentVariants = args.join('|');
  var re = new RegExp("\\W[$]?("+argumentVariants+")\\b","g");
  var sub = x => x[1] === "$" ? x : x[0] + "$" + x.slice(1) ;
  return solution.replace(re, sub);
}