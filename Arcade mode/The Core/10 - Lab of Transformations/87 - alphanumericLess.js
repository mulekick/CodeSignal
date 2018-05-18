'use strict'
function alphanumericLess(s1, s2) {
	const a1 = s1.match(/\d+|\D/g), 
	a2 = s2.match(/\d+|\D/g), 
	l = Math.min(a1.length, a2.length),
	nnum = x => isNaN(1 * x) ? true : !Number.isSafeInteger(1 * x),
	comp = (t1, t2) => {
		let n1 = nnum(t1), n2 = nnum(t2);
		if ((n1 & n2) === 1)
			return t1 === t2 ? 0 : t1 > t2 ? 1 : -1;
		else if ((n1 ^ n2) === 1)
			return n1 ? 1 : -1 ;
		else
			return 1 * t1 === 1 * t2 ? 0 : 1 * t1 > 1 * t2 ? 1 : -1;
	};
	for (let i = 0; i < l; i++) {
		if (comp(a1[i], a2[i]) === 1) return false; 
		if (comp(a1[i], a2[i]) === -1) return true;	
	}
	return a1.length !== a2.length ? 
						a1.length === l :
						(() => {
							for (let i = 0; i < l; i++) {
								let t1 = a1[i], t2 = a2[i], n1 = nnum(t1), n2 = nnum(t2);
								if ((n1 | n2) === 0 && t1.length !== t2.length) return t1.length > t2.length;
							}
							return false;
						})();
}