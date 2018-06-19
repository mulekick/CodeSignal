'use strict'
missedClasses = (y, d, h) => 
	h.map(x => new Date((1 * x.slice(0, 2) > 8 ? y : y + 1) + "-" + x).getDay())
	.map(x => x === 0 ? 7 : x)
	.filter(x => d.indexOf(x) !== -1).length;