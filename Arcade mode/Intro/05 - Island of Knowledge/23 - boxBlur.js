function boxBlur(image) {

	//In memory of Stephen Hawking
	
	var x;
	var y;
	var a;
	var b;
	var sum;
	var row;
	var result = [];
	
	for (x = 1; x < image.length - 1; x++) {
		row = [];
		for (y = 1; y < image[x].length - 1; y++) {
			a = x - 1;
			sum = 0;
			while (a <= x + 1) {
                b = y - 1;
				while (b <= y + 1) {
					sum += image[a][b];
					b++;
				}
				a++;
			}
			row.push(Math.floor(sum / 9));
		}
		result.push(row);
	}
	
	return result;
	
}
