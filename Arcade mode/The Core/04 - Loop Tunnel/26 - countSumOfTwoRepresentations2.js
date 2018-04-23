function countSumOfTwoRepresentations2(n, l, r) {
	var res = 0;
	for (let i = l; i <= r; i++)
		for (let j = i; j <= r && i + j <= n;)
			if (i + j++ == n) res++;
	return res;
}