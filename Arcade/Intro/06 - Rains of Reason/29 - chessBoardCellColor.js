var colors = ["b","w","b","w","b","w","b","w"];
var letters = ["a","b","c","d","e","f","g","h"];
function getColor(val) {
		var cell = val.toLowerCase().split("").map(val => (letters.indexOf(val) != -1) ? letters.indexOf(val) : parseInt(val) - 1);		
		if (cell[1] % 2 == 0)
			return colors[cell[0]];
		else
			return (colors[cell[0]] == "b") ? "w" : "b";	
}
function chessBoardCellColor(cell1, cell2) {

	//In memory of Stephen Hawking
	
	return getColor(cell1) === getColor(cell2)
	
}
