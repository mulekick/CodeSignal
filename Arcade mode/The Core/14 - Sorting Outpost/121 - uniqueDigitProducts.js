'use strict'
uniqueDigitProducts = ar => ar.map(x => {
		let nx = [...("" + x)].map(y => 1 * y);
		return nx.reduce((r, y) => r *= y, 1);
	}).filter((x, i, a) => i === a.indexOf(x)).length;