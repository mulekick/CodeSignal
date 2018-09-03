'use strict'
newRoadSystem = r => {
	let c = r.map(x => x.reduce((r, x) => r += x ? 1 : 0, 0));
	for (let i = 0; i < r.length; i++)
		for (let j = 0; j < r[i].length; j++) r[i][j] ? --c[j] : false;
	return c.every(x => x === 0);
}
