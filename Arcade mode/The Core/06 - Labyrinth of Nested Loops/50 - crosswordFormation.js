'use strict'
/*Here is the damn function*/
crosswordFormation = words => {
	const l = Math.max(...words.map(x => x.length));
	var r = 0, a = permute(words);
	for (w of a)
		for (let x = 2; x < l; x++)
			for (let y = 2; y < l; y++)
				for (let a = 0; a + x < w[0].length; a++)
					for (let b = 0; b + y < w[1].length; b++) {
						if (w[0][a] !== w[1][b]) continue;		
						for (let c = 0; c + y < w[2].length; c++) {	
							if (w[0][a + x] !== w[2][c]) continue;		
							for (let d = 0; d + x < w[3].length; d++)
								if (w[1][b + y] === w[3][d] && w[2][c + y] === w[3][d + x])	r++;
						}
					}	
	return r;
}
/*I did not write the following permutation algorithm myself since this was not the core of the problem, so thumbs up to the person who wrote it...*/
var permArr = [], usedChars = [];
permute = input => {
	var i, ch;
	for (i = 0; i < input.length; i++) {
		ch = input.splice(i, 1)[0];
		usedChars.push(ch);
		if (input.length == 0) permArr.push(usedChars.slice());
		permute(input);
		input.splice(i, 0, ch);
		usedChars.pop();
	}
	return permArr
}
/*
words = ["abcdefgh", "abcdef", "cdef", "bcdefgh"]
indexes = [[a, a + x], [b, b + y], [c, c + y], [d, d + x]]

a = 0, b = 0, c = 0, d = 0, x = 2, y = 2
==>
	abcdefgh
	b d
	bcdefgh
	d f
	e
	f

a = 0, b = 0, c = 0, d = 1, x = 2, y = 2
==>
	abcdefgh
	b d
   bcdefgh
	d f
	e
	f
*/