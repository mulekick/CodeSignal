'use strict'
isInformationConsistent = e => {
	const rotate = a => {
		let h = a.length, w = a[0].length, r = [];
		for (let i = 0; i < w; i++) {
			for (var j = 0, t = []; j < h; j++) t.push(a[j][i]);
			r.push(t);
		}
		return r;
	}
	return rotate(e).map(x => x.reduce((r, y) => y !== 0 ? (r.push(y), r) : r, [])).every(x => !x.length || x.every((y, i, a) => y === a[0]))
}