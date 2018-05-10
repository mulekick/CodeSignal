'use strict'
houseNumbersSum = (a) => {
	var r = 0;
	for (let c = 0; c < a.length; c++) {
		if (a[c] === 0) return r;
		r += a[c];
	}
}