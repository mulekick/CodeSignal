'use strict'
numbersGrouping = (a) => {
	const f = Math.floor, n = 10 ** 4, b = a.map(x => {
		const t = x / n, g = f(t);
		return g - (g === t ? 1 : 0);
	});
	var o = {}, c = 0;
	for (g of b) o[g] = 1;
	for (g in o) c++;
	return c + a.length
}
/* ==> TLE
numbersGrouping = (a) => {
	const f = Math.floor, n = 10 ** 4;
	return a.map(x => {
		const t = x / n, g = f(t);
		return g - (g === t ? 1 : 0);
	}).filter((x, i, a) => a.indexOf(x) === i).length + a.length;
}
*/
/*
[20000, 239, 10001, 999999, 10000, 20566, 29999]
map x = floor(x / 10 ** 4) - (floor(x / 10 ** 4) === (x / 10 ** 4) ? 1 : 0)
[1, 0, 1, 99, 0, 2, 2]
*/