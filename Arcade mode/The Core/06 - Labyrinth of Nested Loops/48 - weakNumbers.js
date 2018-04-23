weakNumbers = n => {
	const d = x => {
		var n = 2;
		for (let i = x - 1; i > 1; i--) x % i == 0 ? n++ : false;
		return n;
	};
	const w = (e, f, g) => g.reduceRight((r, x, i, a) => i < f && e < x ? ++r : r, 0);
	var div = [1];
	for (let i = 2; i <= n; i++) div.push(d(i));
	div = div.map((x, i, a) => w(x, i, a));
    var m = Math.max(...div)
	return [m, div.filter(x => x == m).length];
}

