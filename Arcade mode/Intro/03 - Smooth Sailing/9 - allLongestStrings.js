function allLongestStrings(inputArray) {
	var curlen = 0;
	var result = [];
	var counter;
	for (counter = 0; counter < inputArray.length; counter++) {
		if (inputArray[counter].length > curlen) {
			result = [inputArray[counter]];
			curlen = inputArray[counter].length;
		} else if (inputArray[counter].length == curlen) {
			result.push(inputArray[counter]);		
		}
	}
	return result;
}
