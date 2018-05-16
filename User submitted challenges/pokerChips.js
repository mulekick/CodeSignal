'use strict'
pokerChips = (c) => {
	const f = Math.floor, b = Math.abs;
	const average = c.reduce((r, x) => r += x, 0) / c.length;
	const median = (a) => {
		a = a.sort((a, b) => a - b);
		let i = a.length / 2;
		if (a.length % 2 !== 0)
			return a[f(i)];
		else
			return (a[i - 1] + a[i]) / 2;
	}
	var sum = 0;
	const getmoves = (seat) => {
		sum += c[seat - 1];		
		return seat * average - sum;
	}
	const moves = c.map((x, i) => getmoves(++i));
	const m = median(moves);
	
	var s = 0;
	for (let i = 0; i < moves.length; i++) s += b(moves[i] - m);
	return s;
}