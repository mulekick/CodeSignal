'use strict'
sudoku = g => {
	const c1 = [0, 1, 2, 3, 4, 5, 6, 7, 8], c2 = [0, 3, 6], c3 = [0, 1, 2], ch = x => {
		let co = new Array(9).fill(0);
		for (n of x) ++co[n - 1];
		return co.every(n => n === 1);
	}	
	var a = [];
	for (let i of c1) {
		a.push(g[i].slice());
		a.push(((c) => {		
				let b = [];
				for (let r of c1) b.push(g[r][c]);
				return b;
			}
		)(i))
	}
	for (let i of c2) {
		for (let j of c2) {
			a.push(((c, r) => {		
					let b = [];			
					for (let m of c3)				
						for (let n of c3) b.push(g[c + m][r + n]);
					return b;
				}
			)(i, j))
		}
	}
	return a.every(x => ch(x));
}