//==================== BITWISE SOLUTION O(2n) ===================
'use strict' 
combs = (c1, c2) => {
	var l1, l2, r = [];
	const t = x => parseInt(x.replace(/[*]/g, "1").replace(/[.]/g, "0"), 2), u = x => Math.floor(Math.log2(x)) + 1;
	c1 = t(c1), c2 = t(c2), l1 = u(c1), l2 = u(c2);
	const o1 = l1, o2 = l2;	
	c1 <<= (l1 + l2), c2 <<= l1, l1 = u(c1), l2 = u(c2);
	for (let n = 0; n <= o1 + o2; n++) {
		let k = Math.max(l1 - n, l2), m = Math.min(l2 - n, o1);
		if ((c1 & c2) === 0) r.push(k - m);
		c1 >>>= 1;
	}
	return Math.min(...r);
}
/*
comb1: 	"*..*.*" 	=> 100101 = 37 => l1 = floor(log2(37)) + 1 = 6
comb2: 	"*.***" 	=> 010111 = 23 => l2 = floor(log2(23)) + 1 = 5

comb1 <<= l1 + l2
comb2 <<= l1

o1 = l1
o2 = l2

l1 = floor(log2(comb1)) + 1
l2 = floor(log2(comb2)) + 1

100101				l1 - n		l2 - n		n = 0 										
      10111			l2			o1	 		k = max(l1 - n, l2), m = min(l2 - n, o1)
											comb1 & comb2 === 0 ==> L = k - m, comb1 >>>= 1
---------------------------------------------------------- 
 100101				l1 - n		l2 - n		n = 1
      10111			l2			o1		 	k = max(l1 - n, l2), m = min(l2 - n, o1) + 1)
----------------------------------------------------------
  100101			l1 - n		l2 - n		n = 2 			
      10111			l2			o1		 	k = max(l1 - n, l2), m = min(l2 - n, o1)
											comb1 & comb2 === 0 ==> L = k - m, comb1 >>>= 1
----------------------------------------------------------
      100101		l1 - n		l2 - n		n = o1
      10111			l2			o1		 	k = max(l1 - n, l2), m = min(l2 - n, o1)
----------------------------------------------------------
           100101	l1 - n		l2 - n		n = o1 + o2 	
      10111			l2			o1		 	k = max(l1 - n, l2), m = min(l2 - n, o1)
											comb1 & comb2 === 0 ==> L = k - m, comb1 >>>= 1
----------------------------------------------------------    
*/

//==================== STRING COMPARE SOLUTION O(2n^2) ===================
/*
'use strict'
combs = (c1, c2) => {
	const l1 = c1.length, l2 = c2.length,
	check = (v1, v2) => !v1 || !v2 ? true :
						v1 === ' ' || v2 === ' ' ? true :
						v1 === '*' ? v2 === '.' :
						v1 === '.';
	var r = [];
	c2 = ' '.repeat(l1) + c2;
	for (let n = 0; n < l1 + l2; n++) {
		let j = 0, k = Math.max(l1 + n, l1 + l2), m = Math.min(n, l1);
		for (;j < k; j++) if (!check(c1[j], c2[j])) break;	
		if (j === k) r.push(k - m);
		c1 = ' ' + c1;
	}
	return Math.min(...r);
}
*/
/*
comb1: 	"*..*.*" 	=> l1 = 6
comb2: 	"*.***" 	=> l2 = 5

*..*.*				n				l1 + n			n = 0 										
      *.***			l1		 		l1 + l2			k = max(l1 + n, l1 + l2), m = min(n, l1) ==> L = k - m = 11
----------------------------------------------------------
 *..*.*				n				l1 + n			n = 1
      *.***			l1		 		l1 + l2			k = max(l1 + n, l1 + l2), m = min(n, l1)
----------------------------------------------------------
  *..*.*			n				l1 + n			n = 2 			
      *.***			l1		 		l1 + l2			k = max(l1 + n, l1 + l2), m = min(n, l1) ==> L = k - m = 9
----------------------------------------------------------
      *..*.*		n				l1 + n			n = l1
      *.***			l1		 		l1 + l2			k = max(l1 + n, l1 + l2), m = min(n, l1)
----------------------------------------------------------
           *..*.*	n				l1 + n			n = l1 + l2 	
      *.***			l1		 		l1 + l2	  		k = max(l1 + n, l1 + l2), m = min(n, l1) ==> L = k - m = 11
----------------------------------------------------------    
*/

