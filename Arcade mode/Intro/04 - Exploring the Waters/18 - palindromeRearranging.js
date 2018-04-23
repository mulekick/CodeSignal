Array.prototype.dimensionalIndexOf = function(a,b) {
	for (i=0;i<this.length;i++) {
		if	(a==this[i][b]) {return i;}
	}		
	return -1;
};
function palindromeRearranging(inputString) {

	//Determine if palindrome requirements for a string are met, ie :
	//If number of character is even
		//Each character must be present an even number of times
	//If number of character is uneven
		//Each character minus one must be present an even number of times
		//A single character must be present an uneven number of times
	
	var arrChars = [];
	var allCharsEven = true;
	var i = 0;
	while (i < inputString.length) {
		var curchar = inputString.charAt(i);
		var index = arrChars.dimensionalIndexOf(curchar, 0);
		(index == -1) ? arrChars.push([curchar, 1]) : arrChars[index][1]++;
		i++;
	}
	
	return arrChars.reduce(function(result, val, index, arr) {
		if (val[1] % 2 != 0 && allCharsEven) {allCharsEven = false; return result;}
		return result && (val[1] % 2 == 0);
	},true)
}