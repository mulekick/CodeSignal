function sortByHeight(a) {
	var heights = a.filter(function(value){return value != -1;});
	heights.sort(function(a, b){return a-b});
	return a.map(function(value) {
		if (value == -1) 
			return value;
		else
			return heights.shift();
	})
}