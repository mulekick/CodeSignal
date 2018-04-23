function commonCharacterCount(s1, s2) {

	var arrs1 = s1.split("");
	var arrs2 = s2.split("");
	var match;
	var counter = 0;

	for (i = 0; i < arrs1.length; i++) {
		match = arrs2.indexOf(arrs1[i]);		 
		if (match > -1) {
			counter++;
			arrs2.splice(match, 1);
			arrs1.splice(i, 1);
			i--;			
		}	
	}
	
	return counter;
}