'use strict'
minimalNumberOfCoins = (c, p) => {
	let n = 0;
	for (i = c.length - 1; p > 0; i--) {
		let m = p % c[i];
		n += (p - m) / c[i];
		p = m;
	}
	return n
}