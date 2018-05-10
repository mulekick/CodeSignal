'use strict'
allLongestStrings = (a) => {
	const l = Math.max(...a.map(x => x.length));
	return a.filter(x => x.length === l);
}
