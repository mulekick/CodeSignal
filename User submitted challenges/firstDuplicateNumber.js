function firstDuplicateNumber(t) {
	for (var x = 0; x < t.length; x++) {
		var d = Math.abs(t[x]) - 1;
		if (t[d] < 0) return ++d;
		t[d] = 0 - t[d];
	}
	return -1;
}