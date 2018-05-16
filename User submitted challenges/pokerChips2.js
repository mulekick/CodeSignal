'use strict'
function pokerChips2(c) {
	const f = Math.floor, b = Math.abs;
	const average = c.reduce((r, x) => r += x, 0) / c.length;
	const maxoccurs = (a) => {
		let o = {}, r = [];
		for (let i = 0; i < a.length; i++)	a[i] in o ? ++o[a[i]] : o[a[i]] = 1;
		for (p in o) r.push([o[p], p]);
		r.sort((a, b) => b[0] - a[0]);
		return r[0][1];
	}
	var sum = 0;
	const getmoves = (seat) => {
		sum += c[seat - 1];		
		return seat * average - sum;
	}
	const moves = c.map((x, i) => getmoves(++i));
	const m = maxoccurs(moves);
	
	for (let i = 0; i < moves.length; i++) moves[i] -= m;
	return moves.reduce((r, x) => x !== 0 ? ++r : r, 0);
}