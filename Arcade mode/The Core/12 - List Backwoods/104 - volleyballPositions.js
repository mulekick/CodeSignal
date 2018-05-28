'use strict'
volleyballPositions = (f, k) => {
	const p = [[0, 1], [1, 2], [3, 2], [2, 1], [3, 0], [1, 0]], n = [], m = k % 6;
	p.forEach(x => n.push(f[x[0]][x[1]]));
	for (let i = 0; i < m; i++) n.push(n.shift());
	p.forEach((x, i) => f[x[0]][x[1]] = n[i]);
	return f;
}