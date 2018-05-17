'use strict'
newNumeralSystem = n => {
	const f = String.fromCharCode, s = 0x41, g = n => {
		let r = [], j = Math.floor(n / 2);
		for (let i = 0; i <= j; i++) r.push(f(i + s) + " + " + f(n - i + s));
		return r;
	}
	return g(n.charCodeAt() - s);
}