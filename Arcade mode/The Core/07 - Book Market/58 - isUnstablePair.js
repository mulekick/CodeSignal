'use strict'
isUnstablePair = (f1, f2) => {
	const comp = (s1, s2) => {
		let i = -1;
		while (s1[++i] && s2[i]) if (s1[i] !== s2[i]) return s2[i] < s1[i];
		return s1.length - s2.length
	}
	const u = [f1.toUpperCase(), f2.toUpperCase()].sort(comp)[0].toLowerCase();
	const v = [f1, f2].sort(comp)[0].toLowerCase();
	return v !== u;  
}