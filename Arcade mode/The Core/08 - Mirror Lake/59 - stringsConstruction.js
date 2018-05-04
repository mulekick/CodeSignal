'use strict'
stringsConstruction = (a, b) => {
    const k = Object.keys;
	var oa = {}, ob = {}, n = 50;
	for (c of [...a]) c in oa ? ++oa[c] : oa[c] = 1;
	for (c of [...b]) c in oa ? c in ob ? ++ob[c] : ob[c] = 1 : false;
	for (p in ob) {
		let t = Math.floor(ob[p] / oa[p]);
		t < n ? n = t : false;
	}	
	return k(ob).length !== k(oa).length ? 0 : n;
}