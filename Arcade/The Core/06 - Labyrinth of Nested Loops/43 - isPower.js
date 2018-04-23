isPower = (n) => {
	var x = 1;
	while (++x < n) {
	    var p = 1, xp = x;
		do {
			if (xp == n) return true
			xp = x ** ++p;
		} while (xp <= n)
	}
	return false || (n == 1);
}