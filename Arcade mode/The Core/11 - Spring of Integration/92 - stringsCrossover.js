'use strict'
stringsCrossover = (a, r) => {
	var n = 0;
	const l = (2 ** r.length) - 1;
	a = a.map(x => {
		let t = "";
		for (let i = 0; i < x.length; i++)	t += x[i] === r[i] ? 1 : 0;
		return parseInt(t, 2);
	});
	for (let i = 0; i < a.length; i++)
		for (let j = 0; j < a.length; j++) if ((i !== j) && (a[i] | a[j]) === l) n++;
	return n / 2;
}

/*
a = ["abc", "aaa", "aba", "bab"] 
r = "bbb"

2 ≤ a.length ≤ 10,
1 ≤ a[i].length ≤ 10.
r.length = a[i].length.

Translate a  so that a[i] is an a[i].length long bit sequence in which bit j is equal to 1 only if a[i][j] === r[j], equal to 0 otherwise
Then, bitwise-OR a[i] with each element of a except itself, and increment result pair counter if bitwise-OR result equals to (2 ** a[i].length) - 1
*/