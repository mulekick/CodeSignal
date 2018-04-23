comfortableNumbers = (l, r) => {
	const s = x => [...x.toString()].map(x => 1 * x).reduce((r, x) => r += x, 0);
	const f = (x, y) => {let d = s(x); return y >= x - d && y <= x + d}; 
	var t = 0;
	for (a = l; a < r; a++)
		for (b = a + 1; b <= r; b++) f(a,b) && f(b,a) ? t++ : false;
	return t;
}