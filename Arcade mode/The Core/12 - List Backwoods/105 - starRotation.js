'use strict'
starRotation = (m, w, c, t) => {
	const bl = (w - 1) / 2;
	var e = [], se = [], s = [], sw = [], w = [], nw = [], n = [], ne = [], st, stv;
	for (let i = 1; i <= bl; i++) st = [
									(e.push([0, i]), e),
									(se.push([i, i]), se),
									(s.push([i, 0]), s),
									(sw.push([i, -i]), sw),
									(w.push([0, -i]), w),
									(nw.push([-i, -i]), nw),
									(n.push([-i, 0]), n),
									(ne.push([-i, i]), ne)
								];
	st = st.map(a => a.map(b => [b[0] + c[0], b[1] + c[1]]));
	stv = st.map(a => a.map(b => m[b[0]][b[1]]));
	t %= 8;
	for (let i = 0; i < t; i++) stv.unshift(stv.pop());
	st.forEach((l, i) => l.forEach((v, j) => m[v[0]][v[1]] = stv[i][j]));
	return m;
}