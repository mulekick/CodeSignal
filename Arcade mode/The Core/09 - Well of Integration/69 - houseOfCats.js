'use strict'
houseOfCats = (l) => {
	var r = [];
	l = l - l % 2;
	for (let i = 0; i <= l / 2; i++) {
		let t = 2 * i;
		if ((l - t) % 4 === 0) r.push(i);
	}
	return r;
}

/*

6 = (2 * 1) + (1 * 4)
6 = (2 * 3) + (0 * 4)

7 = (2 * 1) + (1 * 4) + 1
7 = (2 * 3) + (0 * 4) + 1

8 = (2 * 0) + (2 * 4)
8 = (2 * 2) + (1 * 4)
8 = (2 * 4) + (0 * 4)

*/