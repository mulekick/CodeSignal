'use strict'
addBorder = (p) => {
	const f = '*'.repeat(p[0].length + 2);
	p = p.map(x => "*" + x + "*");
	p.push(f);
	p.unshift(f);
	return p;
}