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

/*
Recherche nombre
L = longueur
P = position

[2,1,3]
(L = 1) (P = 1) => 2 => [2,3,4]
(L = 2) (P = 1,2) => 21,12 => [21,22],[12,13]
	
[5,6,6,6]
(L = 1) (P = 1) => 5 => [5,6,7,8]
(L = 2) (P = 1,2,3) => 56,66,66 => [56,57],[65,66,67],[65,66,67] ==> MATCH

[9,1,0,0,1]
(L = 1) (P = 1) => 9 => [9,10,11]
(L = 2) (P = 1,2) => 91,10 => [91,92,93],[9,10,11]
(L = 3) (P = 1,2,3) => 910,100,001 => [910,911],[99,100,101],[invalide] ==> MATCH

[8,0,1,1,3,8,0]
(L = 1) (P = 1) => 8 => [8,9,10,11,12,13,14]
(L = 2) (P = 1,2) => 80,01 => [80,81,82,83],[invalide]
(L = 3) (P = 1,2,3) => 801,011,113 => [801,802,803],[invalide],[112,113,114]
(L = 4) (P = 1,2,3,4) => 8011,0113,1138,1380 => [8011,8012],[invalide],[1137,1138,1139],[1379,1380]
(L = 5) (P = 1,2,3) => 80113,01138,11380 => [80113,80114],[invalide],[11379,11380] ==> MATCH

[3,9,7,6,3,1,0]
(L = 1) (P = 1) => 3 => [3,4,5,6,7,8,9]
(L = 2) (P = 1,2) => 39,97 => [39,40,41,42],[96,97,98,99]
(L = 3) (P = 1,2,3) => 397,976,763 => [397,398,399],[975,976,977],[762,763,764]
(L = 4) (P = 1,2,3,4) => 3976,9763,7631,6310 => [3976,3977],[9762,9763,9764],[7630,7631,7632],[6309,6310]
(L = 5) (P = 1,2,3) => 39763,97631,76310 => [39763,39764],[97630,97631,97632],[76309,76310]
(L = 6) (P = 1,2) => 397631,976310 => [397631,397632],[976309,976310]
(L = 7) (P = 1) => 3976310 => [3976310] ==> MATCH

[8,0,1,1,3,8,0]
(L = 1) (P = 1) => 8 => [8,9,10,11,12,13,14]
(L = 2) (P = 1,2) => 80,01 => [80,81,82,83],[invalide]
(L = 3) (P = 1,2,3) => 801,011,113 => [801,802,803],[invalide],[112,113,114]
(L = 4) (P = 1,2,3,4) => 8011,0113,1138,1380 => [8011,8012],[invalide],[1137,1138,1139],[1379,1380]
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

[8,0,1,1,3,8,0]
(L = 1)...
(L = 2)...
(L = 3)...
(L = 4)...
(L = 5) (P = 1,2,3,4,5) => 80113,01138,11380,13801,38011
	=> [80113,80114,80115],[invalide],[11379,11380,11381],[13800,13801,13802],[38010,38011,38012]
		==> MATCH [80113,80114,80115] => n = 80112 offset = 0
		==> MATCH [38010,38011,38012] => n = 38010 offset = 7	

[2,1,3]
(L = 1) (P = 1) => 2 => [2,3,4]
(L = 2) (P = 1,2,3) => 21,12, + 31 => [21,22],[12,13],[31,32]
		(P = 3,2,1) => 31,12,21 => [31,32],[12,13],[21,22]

[1,9,9,1,2]	
(L = 1) (P = 1) => 9 => [9,10,11]
(L = 2) (P = 1,2,3,4,5) => 19,99,91,12,	+ 21 
		(P = 5,4,3,2,1) => 21,19,99,91,19 
(L = 3) (P = 1,2,3,4,5) => 199,991,912, + 129,291 
		(P = 5,4,3,2,1) => 291,199,919,991,199 => !!!
(L = 4) (P = 1,2,3,4,5) => 1991,9912, + 9129,1299,2991
		(P = 5,4,3,2,1)	=> 2991,1199,9119,9911,1991 => !!!

		
pos += (1 * (9 * (10 pow 0) - 1)) => 9
pos += (2 * (9 * (10 pow 1) - 1)) => 99
pos += (3 * (9 * (10 pow 2) - 1)) => 999
*/