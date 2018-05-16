'use strict'
areSimilar = (a, b) => {
	var n, n2, c = 0;
	for (n = 0; n < a.length; n++)
		if (a[n] !== b[n])	
			if (c < 1) {
				n2 = n + 1;
				while (n2 < b.length) {
					if (a[n] === b[n2] && a[n2] === b[n]) {
						[b[n], b[n2]] = [b[n2], b[n]];
						c++;
						break;
					}
					n2++;
				}	
				if (n2 === b.length) return false
			} else {
				return false;
			}	
	return true;
}
