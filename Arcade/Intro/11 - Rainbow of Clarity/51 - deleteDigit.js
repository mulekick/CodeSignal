function deleteDigit(n) {
	n += "";
	l = n.length;
	res = [];
	for (var i = 0; i < l; i++) res.push(parseInt(n.split("").reduce((r, x, j) => (j != i) ? r + x : r, "")));
	return Math.max(...res);
}
