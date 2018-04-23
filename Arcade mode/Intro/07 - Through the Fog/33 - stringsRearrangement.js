function permute(permutation) {
	var length = permutation.length,
		result = [permutation.slice()],
		c = new Array(length).fill(0),
		i = 1, k, p;

	while (i < length) {
		if (c[i] < i) {
			k = i % 2 && c[i];
			p = permutation[i];
			permutation[i] = permutation[k];
			permutation[k] = p;
			++c[i];
			i = 1;
			result.push(permutation.slice());
		} else {
			c[i] = 0;
			++i;
		}
	}
  return result;
}

var checkdifferences = function (str1, str2) {
	var j = 0;
	var counter = 0;
	while (str1.charAt(j) != "") {				
		if (str1.charAt(j) != str2.charAt(j)) {
			counter++;
		}
		j++;
	}
	return (counter == 1) ? true : false ;
}

function stringsRearrangement(array) {
	var permutations = permute(array);	
	for (var i = 0; i < permutations.length; i++) {
		var result = true;
		for (var j = 0; j < permutations[i].length - 1; j++) {
			result = result && checkdifferences(permutations[i][j], permutations[i][j + 1])
		}
		if (result == true) {return true}
	}
	return false;
}