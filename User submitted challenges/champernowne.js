function champernowne(pattern) {
	//********************************************
	var getnumbersequence = function(n, p, l) {
		var s = (p == 1) ? [n] : [(n > 1) ? --n : n] ;
		while (s.map(x => x.toString()).join("").length <= l + n.toString().length) {
			s.push(++n)
		}
		return s;
	}
	//********************************************	
	var getpatternposition = function (patt) {
		for (var i = 1; i <= patt.split("").map(x => parseInt(x)).length; i++) {
			var offset = 0;
			var result = [];
			var numbers = [];
			//console.log("index = " + i)
			for (var j = 0; j <= i; j++) {				
				var num = (j + i > patt.length && i > 1) ? patt.substr(j) + patt.substr(patt.length - i, i + j - patt.length) : patt.substr(j, i);	
				numbers.push([(num[0] == 0) ? -1 : parseInt(num), j + 1]);
				var d = patt.substr((patt.length >= i + j) ? patt.length - j - i : 0, (patt.length >= i + j) ? i - 1 :  patt.length - j - 1);
				var g = patt.substr(patt.length - j - 1, (patt.length >= i + j) ? 1 : i + j + 1 - patt.length);
				num = g + "" + d;
				numbers.push([(num[0] == 0) ? -1 : parseInt(num), j + 1]);
			}
			numbers.sort((a,b) => a[0] - b[0])
			numbers = numbers.filter((x,i,arr) => (i < arr.length - 1) ? x[0] != arr[i + 1][0] && x[0] != -1 : true);	
			//numbers.forEach(x => console.log(x))
			for (var k = 0; k < numbers.length; k++) {
				if (numbers[k][0] > 0) {
					var sequence = getnumbersequence(numbers[k][0], numbers[k][1], patt.length).join("");
					//console.log(numbers[k] + " ==> " + sequence);
					if (sequence.search(patt) != -1) {
						offset = sequence.search(patt);
						result.push((numbers[k][1] - 1 > 0) ? --numbers[k][0] : numbers[k][0], offset);
						//console.log("found pattern at position " + result[1] + " of sequence " + sequence + " - number = " + result[0]);
						return result;
					}
				}		
			}			
		}	
	}
	//********************************************	
	var getnumberposition = function(number) {
		var position = 0;
		var power = 0;
		var boundary = 0;		
		var arr = number.split("").map(x => parseInt(x)).reverse();
		for (var i = 0; i < arr.length; i++) {
			if (i < arr.length - 1) {
				position += ((power + 1) * 9 * (Math.pow(10, power)) - 1);
				boundary = (++boundary * 10) - 1;
				power++;				
			} else {
				position += (parseInt(number) - boundary) * ++power;
			}
		}
		return position;
	}
	//********************************************
	var t = 0;
	if (pattern.split("").every(x => parseInt(x) == 0)) {pattern = 1 + pattern; t += 1}
	if (pattern.length == 2 && pattern[0] == "9") {pattern += "0"}
	var res = getpatternposition(pattern);
	return getnumberposition(res[0].toString()) + res[1] + t;
}