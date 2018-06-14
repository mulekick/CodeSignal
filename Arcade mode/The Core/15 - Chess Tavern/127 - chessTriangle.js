'use strict'
chessTriangle = (n, m) => {
	const f = x => Math.max(x, 0);
	var t = 0, cells, times;	
	//2 * 3
	cells = 4 * (m - 2), times = (n - 1);
	t += f(times * cells) * 2;	
	//3 * 2
	cells = 4 * (m - 1), times = (n - 2);
	t += f(times * cells) * 2;	
	//3 * 3
	cells = 8 * (m - 2), times = (n - 2);
	t += f(times * cells) * 2;
	//3 * 4
	cells = 8 * (m - 3), times = (n - 2);
	t += f(times * cells);		
	//4 * 3
	cells = 8 * (m - 2), times = (n - 3);
	t += f(times * cells);
	//2 * 4
	cells = 8 * (m - 3), times = (n - 1);
	t += f(times * cells);	
	//4 * 2
	cells = 8 * (m - 1), times = (n - 3);
	t += f(times * cells);	
	
	return t;
}