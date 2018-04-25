/*
like0hn0 = grid => {	
	const mvs = {U:1,D:1,L:1,R:1};
	const val = (x, y) => !grid[y] || !grid[y][x] ? - 1 : 1; 
	const mov = {
		U:(x, y, m) => val(x, y - m),
		D:(x, y, m) => val(x, y + m),
		L:(x, y, m) => val(x - m, y),
		R:(x, y, m) => val(x + m, y)
	};
	const chk = function(x, y) {
		let sum = 0;
		let m = Object.assign({}, mvs);
		for (dir in m) {
			let t = mov[dir](x, y, m[dir]);
			while(t > 0) t = mov[dir](x, y, ++m[dir]);
			sum += --m[dir];
		}
		return grid[y][x] === sum;
	}
	return grid.every((c, y) => c.every((v, x) => v === 0 ? true : chk(x, y)));
}
*/
//SEE ABOVE FOR CLEAN CODE AND BELOW FOR GARBAGE
like0hn0 = g => {	
	e = {U:1,D:1,L:1,R:1}
	f = (x, y) => !g[y] || !g[y][x] ? - 1 : 1
	o = {
		U:(x, y, m) => f(x, y - m),
		D:(x, y, m) => f(x, y + m),
		L:(x, y, m) => f(x - m, y),
		R:(x, y, m) => f(x + m, y)
	}
	h = function(x, y) {
		s = 0;
		m = Object.assign({}, e)
		for (a in m) {
			t = o[a](x, y, m[a])
			while(t > 0) t = o[a](x, y, ++m[a])
			s += --m[a]
		}
		return g[y][x] == s
	}
	return g.every((c, y) => c.every((v, x) => v == 0 ? 1 : h(x, y)))
}