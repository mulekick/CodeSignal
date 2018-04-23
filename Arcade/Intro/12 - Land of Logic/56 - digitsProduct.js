function digitsProduct(product) {
	if (product == 0) return 10;
	if (product < 10) return product;
	var d = [];
	var t;
	var digit = function(x) {
		for (var i = 9; i > 1; i--) {
			if (x % i == 0) return i;
		}
		return -1;
	}
	do {
		t = digit(product);
		if (t > 0) {
			d.push(t);
			product /= t;
		} else {
            return - 1;            
        }
	} while (product > 1 && t > 0)    
    return parseInt(d.reverse().join(""))
}