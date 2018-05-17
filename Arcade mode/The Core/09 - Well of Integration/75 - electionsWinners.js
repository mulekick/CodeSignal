'use strict'
electionsWinners = (v, k) => {
	const t = Math.max(...v), a = v.filter(x => x === t).length, b = v.reduce((r,x) => x > t - k ? ++r : r, 0);
	return k === 0 ? a === 1 ? 1 : a > 1 ? 0 : b : b;
}
