'use strict'
bishopAndPawn = (b, p) => {
	[xb, yb] = [b[0].charCodeAt() - 0x60, parseInt(b[1])];
	[xp, yp] = [p[0].charCodeAt() - 0x60, parseInt(p[1])];
	return Math.abs(xp - xb) === Math.abs(yp - yb);
}