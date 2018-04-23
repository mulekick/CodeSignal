function arrayChange(inputArray) {
	var increment = 0;
	inputArray.forEach(function (val, index, arr){
		while (val <= arr[index - 1] && index > 0) {
			increment++;
			val++;
		}
		arr[index] = val;
	});
	return increment;
}