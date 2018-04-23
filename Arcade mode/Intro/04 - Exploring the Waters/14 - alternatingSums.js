function alternatingSums(a) {
	var counter;
	var sumteam1 = 0;
	var sumteam2 = 0;
	for (counter = 0; counter < a.length; counter++) {
		if (counter % 2 == 0)
			sumteam1 += a[counter];
		else
			sumteam2 += a[counter];
	}
	return [sumteam1, sumteam2];
}