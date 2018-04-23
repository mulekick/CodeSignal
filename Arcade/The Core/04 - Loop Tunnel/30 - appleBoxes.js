function appleBoxes(k) {
	var r = 0, y = 0;
	for (let i = 1; i <= k; i++)
		if (i % 2 == 1) y += i ** 2;
		else r += i ** 2;
	return r - y;
}
