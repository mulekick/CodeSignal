isSumOfConsecutive2 = (n) => {
	var x = 1, t = 0;
	while (x < Math.ceil(n / 2)) {	
		var i = 1;
		do {		
			var y = x;
			for (let c = 1; c <= i; c++) y += x + c;			
			y == n ? t++ : false;
			i++;			
		} while (y < n)
		x++;
	}
	return t;
}