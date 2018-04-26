bitLXor = (a, b) => {
	c = [a, b].sort((x, y) => Math.abs(x) - Math.abs(y));
	d = c.map(x => Math.floor(Math.log2(x >= 0 ? x : ~x)));
	return (c[0] <<= Math.abs(d[0] - d[1])) ^ c[1];
}