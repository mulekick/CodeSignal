'use strict'
constructSquare = (s) => {
	const f = (s) => {
		var o = {}, a = [];
		[...s].forEach(x => x in o ? ++o[x] : o[x] = 1);
		for (x in o) a.push(o[x]);
		return a.sort((a, b) => b - a);
	}, as = f(s), st = 1 * as.map((x, i) => ("" + (9 - i)).repeat(x)).join("");
	var at, rt, n;
	for (let i = st; ("" + i).length === s.length; i--) {
		let v = Math.sqrt(i);
		if (Math.floor(v) === v) {
			rt = v;
			break;
		}
	}	
	if (typeof rt === "undefined") return - 1;
	do {
		n = (rt-- ** 2);
		at = f("" + n);	
		if (as.every((x, i) => x === at[i])) return n;
	} while (("" + n).length === s.length)
	return - 1;
}
/*
constructSquare = (s) => {
	const f = (s) => {
		var o = {}, a = [];
		[...s].forEach(x => x in o ? ++o[x] : o[x] = 1);
		for (x in o) a.push(o[x]);
		return a.sort((a, b) => b - a);
	}
	var as, at, start;
	as = f(s)	
	start = 1 * as.map((x, i) => ("" + (9 - i)).repeat(x)).join("");
	for (let n = start; n >= 0; n--) {
		let r = Math.sqrt(n);
		if (Math.floor(r) === r) {
			at = f("" + n);			
			if (as.every((x, i) => x === at[i])) return n;
		}
	}
	return - 1;
}
*/