/*
like0hn0 = grid => {	
	const dir = ["U","D","L","R"];
	const mvs = {U:1,D:1,L:1,R:1};
	const val = (x, y) => !grid[y] || !grid[y][x] ? - 1 : 1; 
	const mov = {
		U:(x, y, m) => val(x, y - m),
		D:(x, y, m) => val(x, y + m),
		L:(x, y, m) => val(x - m, y),
		R:(x, y, m) => val(x + m, y)
	};
	const chk = function(x, y) {
        let m = Object.assign({}, mvs);
		dir.forEach(d => {
			let t = mov[d](x, y, m[d]);
			while(t > 0) t = mov[d](x, y, ++m[d]);
			--m[d];
		});
		return grid[y][x] === dir.reduce((r, z) => r += m[z], 0);
	}
    return grid.every((c, y) => c.every((v, x) => v === 0 ? true : chk(x, y)));
}
*/
//SEE ABOVE FOR CLEAN CODE AND BELOW FOR GARBAGE
like0hn0 = g => {	
	d = ["U","D","L","R"]
	e = {U:1,D:1,L:1,R:1}
	f = (x, y) => !g[y] || !g[y][x] ? - 1 : 1
	o = {
		U:(x, y, m) => f(x, y - m),
		D:(x, y, m) => f(x, y + m),
		L:(x, y, m) => f(x - m, y),
		R:(x, y, m) => f(x + m, y)
	}
	h = function(x, y) {
        m = Object.assign({}, e)
		d.forEach(a => {
			t = o[a](x, y, m[a])
			while(t > 0) t = o[a](x, y, ++m[a])
			--m[a]
		})
		return g[y][x] == d.reduce((r, z) => r += m[z], 0)
	}
    return g.every((c, y) => c.every((v, x) => v == 0 ? 1 : h(x, y)))
}