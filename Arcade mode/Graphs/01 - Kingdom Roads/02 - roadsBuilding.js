'use strict'
roadsBuilding = (c, r) => {
	let b = [], r1 = "." + r.join(".") + ".";
	for (let i = 0; i < c; i++)
		for (let j = i + 1; j < c; j++) 
			r1.indexOf('.' + i + ',' + j + '.') === -1 && 
			r1.indexOf('.' + j + ',' + i + '.') === -1 ? 
				b.push([i, j]) : 
				false;
	return b;
}