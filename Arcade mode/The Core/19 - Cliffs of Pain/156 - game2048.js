game2048 = (g, p) => {
	const 
	rotate = a => {
		let h = a.length, w = a[0].length, r = [];
		for (let i = 0; i < w; i++) {
			for (var j = h - 1, t = []; j >= 0; j--) t.push(a[j][i]);
			r.push(t);
		}
		return r;
	},
	update = r => {	
		let i = r.length - 1;
		for (let j = i; j >= 0; j--)
			if (r[j] === 0){
				for (let k = j; k >= 0; k--) r[k] = !r[k - 1] ? 0 : r[k - 1];
			}
		for (let j = i; j >= 0; j--)
			if (r[j] === r[j - 1]) {
				r[j] *= 2;
				for (let k = j - 1; k >= 0; k--) r[k] = !r[k - 1] ? 0 : r[k - 1];
			}
		for (let j = i; j >= 0; j--)
			if (r[j] === 0){
				for (let k = j; k >= 0; k--) r[k] = !r[k - 1] ? 0 : r[k - 1];
			}
		return r;
	},
	moves = {"L": [2, 2], "R": [0, 0], "U": [1, 3], "D": [3, 1]};
	for (m of p) {
		for (let i = 0; i < moves[m][0]; i++) 
			g = rotate(g);
		for (let i = 0; i < g.length; i++) 
			g[i] = update(g[i]);	
		for (let i = 0; i < moves[m][1]; i++) 
			g = rotate(g);
	}
	return g;
}
/*
0,0,0,0 	orig ==> temp = rotate orig 0 * 90°
0,0,2,2  	==> right temp = right orig.
0,0,2,4 	temp ==> orig = rotate orig 0 * 90° 
2,2,4,8
======
2,0,0,0 	orig ==> temp = rotate orig 1 * 90°
2,0,0,0 	==> right temp = up orig.
4,2,2,0 	temp ==> orig = rotate temp 3 * 90°
8,4,2,0
======
8,4,2,2 	orig ==> temp = rotate orig 2 * 90°
4,2,0,0 	==> right temp = left orig.
2,2,0,0 	temp ==> orig = rotate orig 2 * 90°
0,0,0,0
======
0,2,4,8 	orig ==> temp = rotate orig 3 * 90°
0,2,2,4 	==> right temp = down orig.
0,0,0,2 	temp ==> orig = rotate orig 1 * 90°
0,0,0,2
*/



