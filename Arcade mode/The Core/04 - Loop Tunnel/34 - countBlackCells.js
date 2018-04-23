function countBlackCells(n, m) {
    if (n == 1) return m;
	var e = n / m, x, y, z, a, t = 0;
	for (x = 1; x <= m; x++) {
		y = e * x;
		z = e * (x - 1);
		a = Math.ceil(Math.floor(y) - z);
		a += (x == 0 || x == m) ? 0 : 1;
		a += (!(x == 0 || x == m) && (n == m || y == Math.floor(y))) ? 1 : 0;
        t += a;
	}
    return t;
}