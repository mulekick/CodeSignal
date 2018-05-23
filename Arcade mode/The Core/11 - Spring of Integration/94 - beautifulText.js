'use strict'
beautifulText = (s, l, r) => {
	for (let t = l + 1; t <= r + 1; t++) {
		let p1 = 0, p2 = t, a = [], m = s.length;
		for (; p1 < m; p1 = p2, p2 += t) a.push(s.slice(p1, p2));
		let b = a.pop(), c = b.length;
		if (a.length && a.every(x => x.length - 1 === c && x.slice(c) === ' ')) return true;
	}
	return false;
}
