squareDigitsSequence = a0 => {
	const f = x => [...x.toString()].map(v => 1 * v).reduce((r, v) => r += v ** 2, 0);
	var n = [a0], a = f(a0);
	while (n.indexOf(a) == -1) {
		n.push(a);
		a = f(a);
	}
	return n.length + 1;
}