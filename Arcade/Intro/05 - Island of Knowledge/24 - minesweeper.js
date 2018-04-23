function minesweeper(matrix) {

	//In memory of Stephen Hawking
	
	var x;
	var y;
	var a;
	var b;
	var total;
	var row;
	var result = [];
	
	for (x = 0; x < matrix.length; x++) {
		row = [];
		for (y = 0; y < matrix[x].length; y++) {
			a = x - 1;
			total = 0;
			while (a <= x + 1) {
                b = y - 1;
				while (b <= y + 1) {				
					if ((a >= 0) && (a < matrix.length)) {				
						if ((b >= 0) && (b < matrix[a].length)) {							
							total += ((a != x || b != y) && (matrix[a][b] == true)) ? 1 : 0;
						}					
					}
					b++;
				}
				a++;
			}
			row.push(total);
		}
		result.push(row);
	}
	
	return result;
	
}