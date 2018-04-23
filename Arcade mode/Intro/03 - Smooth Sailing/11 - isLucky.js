function isLucky(n) {
    var counter = 0;
	var n1 = 0;
	var n2 = 0;
	arrnum = n.toString().split("");
	while (counter < arrnum.length) {
		if (counter < arrnum.length / 2)
			n1 += parseInt(arrnum[counter]);
		else
			n2 += parseInt(arrnum[counter]);
		counter++;
	}
    return (n1 === n2);
}