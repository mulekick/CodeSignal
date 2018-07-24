'use strict'
linesGame = (fld, cl, nb, nc) => {
	const 
	//Rotate array by 45° (changes its dimensions)
	rotate45 = a => {
		let d = [], l = a.length * 2 - 1;
		for (let r = 0; r < l; r++) {
			let [y, x] = [r, 0], t = [];
			for (let i = 0; i < 9; i++, y--, x++) a[y] && a[y][x] ? t.push(a[y][x]) : false;
			d.push(t);
		}
		return d;
	},
	//Rotate array by 90° (dimensions stay the same)
	rotate90 = a => {
		let h = a.length, w = a[0].length, r = [];
		for (let i = 0; i < w; i++) {
			for (var j = h - 1, t = []; j >= 0; j--) t.push(a[j][i]);
			r.push(t);
		}
		return r;
	},	
	//The recursive search is performed by searching the current cell's neighbors for free cells in THIS order (bottom, left, top, right)
	//Any attempt to search the current cell's neighbors in a different order either fails some tests cases or results in a TLE
	nbs = [[1, 0], [0, -1], [-1, 0], [0, 1]],	
	//Recursive search function to find a clear path between o (origin) and tr (target)
	findpath = (o, cr, bf, tr) => {	
		let [y, x] = cr;
		//The limitation of 10000 steps to find a clear path is necessary as well as completely arbitrary (to avoid TLE's)
		if (c++ > 1e+4 || bf.some(v => "" + [y, x] === "" + v) || !fld[y] || !fld[y][x])
			return [false, bf];
		else if ("" + [y, x] === "" + tr)
			return [true, bf];
		else if (fld[y][x] !== "." && "" + [y, x] !== "" + o)
			return [false, bf];
		else {
			bf.push([y, x]);			
			for ([yn, xn] of nbs)
				if (findpath(o, [y + yn, x + xn], bf, tr)[0] === true) return [true, bf];
			bf.pop();		
			return [false, bf];				
		}
	},
	//Regular expression for lines isolation
	line = /(R{5,}|B{5,}|O{5,}|V{5,}|G{5,}|Y{5,}|C{5,})/g,
	//Check for lines in current rotation...
	checklines = (a, m) => {
		let r = [];
		for (let i = 0, f; i < a.length; i++)
			while (f = line.exec(a[i].join(""))) 
				r.push(m[i].slice(f["index"], 1 * f["index"] + f[0].length));
		return r;
	}
	//Update field rotations
	updaterotations = () => (fld45 = rotate45(fld), fld90 = rotate90(fld), fld135 = rotate45(fld90), null);
	
	var 
	fld45, fld90, fld135,
	//Use maps of field's rotations coordinates...
	ty = -1, tx, mp = fld.map(r => (tx = 0, ty++, r.map(c => [ty, tx++]))),		
	mp45 = rotate45(mp), mp90 = rotate90(mp), mp135 = rotate45(mp90),
	c, score = 0;
	
	//Reverse clicks, newBalls, newBallsCoordinates in order to speed up execution (pop instead of shift)
	//Initialize field's 45°, 90° and 135° rotations
	cl.reverse(), nb.reverse(), nc.reverse(), updaterotations();
	//While clicks is not empty
	while (cl[0]) {
		//Check if current move is valid		
		//Pop e1 and e2 from clicks
		c = 0;
		let vm = true, e1 = cl.pop(), e2 = cl.pop();
			//If e1 is not a ball's coordinates
			if (fld[e1[0]][e1[1]] === ".") {
				//Current move is invalid, discard e1 and push e2 in clicks
				vm = false, cl.push(e2);
			//If e1 and e2 are both some ball's coordinates
			} else if (fld[e1[0]][e1[1]] !== "." && fld[e2[0]][e2[1]] !== ".") {
				//Current move is invalid, discard e1 and push e2 in clicks
				vm = false, cl.push(e2);				
			//If no clear path exists from e1 to e2
			} else if (findpath(e1, e1, [], e2)[0] === false) {
				//Current move is invalid, discard e1 and e2
				vm = false;
			}

		//If current move is not valid
			//Proceed to next move
		if (vm === false) continue;
		
		//If current move is valid
			//Move ball from e1 to e2 in field
			//Update field's 45°, 90° and 135° rotations
			fld[e2[0]][e2[1]] = fld[e1[0]][e1[1]], fld[e1[0]][e1[1]] = ".", updaterotations();
			//Check if current move is successful
				//Check the sequences of at least 5 balls of the same color in field, 45° rotation, 90° rotation, 135° rotation
				lines = [], lines.push(...checklines(fld, mp), ...checklines(fld45, mp45), ...checklines(fld90, mp90), ...checklines(fld135, mp135));	
				//If current move is unsuccessful (no line found)				
				if (!lines[0]) {
					//Add the new balls in field
					for (let i = 0; i < 3; i++) {
						let b = nc.pop();
						fld[b[0]][b[1]] = nb.pop();
					}
					//Update field's 45°, 90° and 135° rotations
					updaterotations();
				}
			//Check if lines have appeared
				//Check the sequences of at least 5 balls of the same color in field, 45° rotation, 90° rotation, 135° rotation
				lines = [],	lines.push(...checklines(fld, mp), ...checklines(fld45, mp45), ...checklines(fld90, mp90), ...checklines(fld135, mp135));	
				//If lines have appeared...
				if (lines[0]) {
					//Increment score
					score += lines.length + lines.reduce((r, l) => r += l.length, 0) - 1;
					//Remove the line's balls from field and replace them with dots
					lines.forEach(l => {
						for (e of l) fld[e[0]][e[1]] = ".";
					});
					//Update field's 45°, 90° and 135° rotations
					updaterotations();
				}				
	//End while
	}
	//Return score	
	return score;
}

/*

Rotate 90°

. G . . . . . . .
. . . . . . . V .
. O . . O . . . .
. . . . O . . . .
. . . . . . . . O
. . . . O . . . .
. . . . . . . . .
R . . . . . . B R
. . C . . . . Y O

Rotate 45°

        .
       . G
      . . .
     . O . .
    . . . . .
   . . . . . .
  . . . . O . .
 R . . . O . . .
. . . . . . . V .
 . . . O . . . .
  C . . . . . .
   . . . . . .
    . . . . O
     . . . .
      . B .
       Y R
        O	

	//Reverse clicks, newBalls, newBallsCoordinates in order to speed up execution (pop instead of shift)
	//Initialize field's 45°, 90° and 135° rotations
	//While clicks is not empty
		//Check if current move is valid		
		//Pop e1 and e2 from clicks
			//If e1 is not a ball's coordinates
				//Current move is invalid, discard e1 and push e2 in clicks
			//If e1 and e2 are both some ball's coordinates
				//Current move is invalid, discard e1 and push e2 in clicks
			//If no clear path exists from e1 to e2
				//Current move is invalid, discard e1 and e2
		//If current move is not valid
			//Proceed to next move
		
		//If current move is valid
			//Move ball from e1 to e2 in field
			//Update field's 45°, 90° and 135° rotations
			//Check if current move is successful
				//Check the sequences of at least 5 balls of the same color in field, 45° rotation, 90° rotation, 135° rotation
				//If current move is unsuccessful (no line found)				
					//Add the new balls in field
					//Update field's 45°, 90° and 135° rotations
			//Check if lines have appeared
				//Check the sequences of at least 5 balls of the same color in field, 45° rotation, 90° rotation, 135° rotation
				//If lines have appeared...
					//Increment score
					//Remove the line's balls from field and replace them with dots
					//Update field's 45°, 90° and 135° rotations
	//End while
	//Return score	
*/