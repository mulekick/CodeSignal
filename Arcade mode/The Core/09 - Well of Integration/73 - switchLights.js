// ===> Very very interesting exercise...

//O(2n) time complexity, golfed
'use strict'
switchLights = (a) => {	
	let f = a.filter(x => x === 1).length;
	return f === 0 ? a : a.map(x => x ^ Math.abs(x === 1 ? f-- : f) % 2);
}

//O(2n) time complexity
/*
switchLights = (a) => {	
	let f = a.filter(x => x === 1).length;
	return f === 0 ? a : a.map(x => {
		let t = x ^ Math.abs(f) % 2;
		if (x === 1) --f
		return t;
	});
}
*/

// O(n^2) time complexity
/*
switchLights = (a) => {	
	let i = 0
	while (i < a.length) {
		if (a[i] === 1)
			for (let j = i; j >= 0; j--) a[j] = a[j] ^ 1;
		i++;
	}
	return a
}
*/