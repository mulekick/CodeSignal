function champernowneDigit(n) {
	s = "";
	c = 0;
	while (s.length < n) s += ++c;
	return 1 * s[--n];
}