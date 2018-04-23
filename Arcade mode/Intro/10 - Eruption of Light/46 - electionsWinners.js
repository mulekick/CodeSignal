function electionsWinners(votes, k) {
	var t = Math.max(...votes);
	a = votes.filter((x) => (x == t) ? true : false).length;
	b = votes.reduce((r,x) => (x > t - k) ? ++r : r, 0);
	if (k == 0 && a == 1) return 1;
	if (k == 0 && a > 1) return 0;
	return b;
}
