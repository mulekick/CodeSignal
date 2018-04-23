function rounders(value) {
	return 1 * [..."" + value]
	.map(x => 1 * x)
	.reverse()
	.map(
		function(x, i, arr){
			if (i == arr.length - 1) return x;
			if (x >= 5)	++arr[i + 1];
			return 0;
		})
	.reverse()
	.map(x => "" + x)
	.join("");
}
