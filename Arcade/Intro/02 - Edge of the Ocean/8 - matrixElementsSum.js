function matrixElementsSum(matrix) {
	var arrHauntedRoomsIndexes = [];
	var countrows;
	var countcolumns;
	var totalprice = 0;
	
	for (countrows = 0; countrows < matrix.length; countrows++) {
		for (countcolumns = 0; countcolumns < matrix[countrows].length; countcolumns++) {
			if (matrix[countrows][countcolumns] == 0) {
				arrHauntedRoomsIndexes.push(countcolumns);
				continue;
			}
			if(arrHauntedRoomsIndexes.indexOf(countcolumns) != -1) {
				continue;			
			}
			totalprice += matrix[countrows][countcolumns];
		}
	}
	return totalprice;	
}