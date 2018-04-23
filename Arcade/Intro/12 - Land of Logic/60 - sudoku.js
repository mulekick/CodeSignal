function sudoku(grid) {
	sudoku = true;
	var i;
	var j;

	var check = function(a, s, e) {
		var l = 0;
		var d = [];
		while (l < a.length) {
            var b = s;
			while (b < e) {
				if (d.indexOf(a[l][b]) != -1) {return false} else {d.push(a[l][b])};
                b++;
			}
			l++;
		}
		return true;
	}

	for (i = 0; i < 9; i++) {
		sudoku = sudoku && check([grid[i]], 0, 9);		
		sudoku = sudoku && check([grid.map(x => x[i])], 0, 9);
	}

	for (i = 0; i < 9; i += 3) {
		for (j = 0; j < 9; j += 3) {
			sudoku = sudoku && check(grid.slice(i, i + 3), j, j + 3);
		}
	}
	return sudoku;
}