'use strict'
bishopDiagonal = (b1, b2) => {
	[xb1, yb1] = [b1[0].charCodeAt() - 0x60, parseInt(b1[1])];
	[xb2, yb2] = [b2[0].charCodeAt() - 0x60, parseInt(b2[1])];
	const cbd = (x1, y1, x2, y2) => Math.abs(x1 - x2) !== Math.abs(y1 - y2) ? 0 : (x1 - x2) / (y1 - y2), v = cbd(xb1, yb1, xb2, yb2);
	if (v === 1) {
		if (yb1 > yb2) {	
			while (xb1 < 8 && yb1 < 8) (xb1++, yb1++);
			while (xb2 > 1 && yb2 > 1) (xb2--, yb2--);
		} else {
			while (yb2 < 8 && xb2 < 8) (xb2++, yb2++);
			while (xb1 > 1 && yb1 > 1) (xb1--, yb1--);
		}
	} else if (v === -1) {
		if (yb1 > yb2) {		
			while (xb1 > 1 && yb1 < 8) (xb1--, yb1++);
			while (xb2 < 8 && yb2 > 1) (xb2++, yb2--);
		} else {
			while (xb2 > 1 && yb2 < 8) (xb2--, yb2++);
			while (xb1 < 8 && yb1 > 1) (xb1++, yb1--);
		}
	}
	
	return [[xb1, yb1].map((x, i) => i === 0 ? String.fromCharCode(x + 0x60) : x).join(""),
			[xb2, yb2].map((x, i) => i === 0 ? String.fromCharCode(x + 0x60) : x).join("")].sort();
}