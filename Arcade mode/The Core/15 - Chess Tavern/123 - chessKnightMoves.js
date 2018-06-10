'use strict'
chessKnightMoves = c => {
	[xc, yc] = [c[0].charCodeAt() - 0x60, parseInt(c[1])];
	const gm = (x, y) => [[x + 1, y + 2], [x + 1, y - 2],
						  [x + 2, y + 1], [x + 2, y - 1],
						  [x - 1, y + 2], [x - 1, y - 2],
						  [x - 2, y + 1], [x - 2, y - 1]];			 
	return gm(xc, yc).reduce((r, x) => x.every(x => x > 0 && x < 9 ) ? ++r : r, 0);
}