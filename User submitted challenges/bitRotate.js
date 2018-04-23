bitRotate = (n, r) => {
	s = 2 ** 31 - 1;
	d = Math.abs(r) % 31;
	e = 31 - d;
	f = r >=0 ? ~(2 ** e - 1) : 2 ** d - 1;
	if (r >=0 ) {
		p = n & f & s;
		p >>= e;
		n <<= d;
		n &= s;
    } else {
		p = n & f;
		p <<= e;
		n >>= d;
    }
	return n | p
}