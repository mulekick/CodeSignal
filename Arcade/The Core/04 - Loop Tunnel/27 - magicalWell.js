function magicalWell(a, b, n) {
	var res = 0;
	for (let i = 0; i++ < n;) res += a++ * b++;
	return res;
}
