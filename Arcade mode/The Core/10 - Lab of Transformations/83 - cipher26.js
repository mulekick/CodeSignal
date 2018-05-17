'use strict'
cipher26 = c => {
	const h = 0x61, 
	f = String.fromCharCode, 
	g = a => a.charCodeAt() - h, 
	k = a => f(a + h),
	getsum = (a, s, e) => {
		let r = a[s];
		for (let i = s + 1; i <= e; i++) r += a[i];
		return r;
	},
	getx = (x, i) => {
		if (c[i] > 25 + getsum(d, 0, i - 1) - (x * 26)) return --x;		
		if (c[i] < getsum(d, 0, i - 1) - (x * 26)) return ++x;
		return x;	
	},
	getd = (i) => {
		n = getx(n, i);
		return (n * 26) + c[i] - getsum(d, 0, i - 1);
	};
	c = [...c].map(x => g(x));	
	var d = [c[0]], n = 0;
	for (let i = 1; i < c.length; i++) d.push(getd(i));
	return d.map(x => k(x)).join("");
}