'use strict'
//Shorter, cleaner and more efficient...
drawRectangle = (c, r) => {	
	[x1, y1, x2, y2] = r;
	c[y1][x1] = "*", c[y2][x2] = "*", c[y1][x2] = "*", c[y2][x1] = "*";
	for (let i of [y1, y2])
		for (let j = x1 + 1; j < x2; j++) c[i][j] = "-";
	for (let j of [x1, x2])
		for (let i = y1 + 1; i < y2; i++) c[i][j] = "|";
	return c;
}
/*
drawRectangle = (c, r) => {	
	const ul = [r[0], r[1]], br = [r[2], r[3]],	ur = [r[2], r[1]], bl = [r[0], r[3]], e = (a, b) => a.every((x, i) => x === b[i]);
	return c.map(
		(l, y) => l.map(
			(c, x) => {
				let p = [x, y];
				return e(p, ul) || e(p, ur) || e(p, bl) || e(p, br) ? "*" : 
					(y === ul[1] || y === bl[1]) && x > ul[0] && x < ur[0] ? "-" :
					(x === ul[0] || x === ur[0]) && y > ul[1] && y < bl[1] ? "|" :
					c;
		}))
}
*/