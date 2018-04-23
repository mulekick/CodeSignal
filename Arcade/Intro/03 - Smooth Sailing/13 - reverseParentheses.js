function reverseParentheses(s) {
	var indexopen = s.lastIndexOf("(");
	var indexclose;
	while(indexopen > -1) {
		indexclose = s.indexOf(")", indexopen);
		var temp = s.substr(indexopen + 1, indexclose - indexopen - 1).split("").reverse().join("");
		s = s.substr(0, indexopen) + temp + s.substr(indexclose + 1);
		indexopen = s.lastIndexOf("(");
	}
	return s;
}