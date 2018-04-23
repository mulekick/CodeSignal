pagesNumberingWithInk = (c, n) => {
	const f = x => Math.floor(Math.log10(x)) + 1;
	var y = f(c);
	while (n >= y) {
		n -= y;
		y = f(++c);
	}
	return --c;
}
