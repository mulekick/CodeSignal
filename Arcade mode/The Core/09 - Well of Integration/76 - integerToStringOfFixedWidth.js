'use strict'
integerToStringOfFixedWidth = (n, w) => {
	const x = '0'.repeat(w) + n;
	return x.slice(x.length - w);
}