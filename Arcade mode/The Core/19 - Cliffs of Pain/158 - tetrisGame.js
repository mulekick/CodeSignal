'use strict'
tetrisGame = p => {
	const rotate = a => {
		let h = a.length, w = a[0].length, r = [];
		for (let i = 0; i < w; i++) {
			for (var j = h - 1, t = []; j >= 0; j--) t.push(a[j][i]);
			r.push(t);
		}
		return r;
	},
	c2b = a => parseInt((a.join("").replace(/[.#]/g, x => ({".": "0", "#": "1"}[x])) + "0000000000").slice(0, 10), 2);
	//Init field F = 0000000000
	var f = [0b0000000000], fits, r, s, fld, fp, fsave, l, counter = 0;
	//For each falling piece PN, find the optimal position in F
	for (pn of p) {		
		fsave = [,,,];
		//For each r between 0 and 3
		for (r = 0; r <= 3; r++) {		
			//Init PNR = Apply r 90° clockwise rotations to PN 
			let pnr = pn.map(x => x.slice());
			for (let cr = 0; cr < r; cr++) pnr = rotate(pnr);
			pnr = pnr.reverse();
			//Find max shift for current rotation
			let maxs = Math.ceil(Math.log2(0b1111111111 ^ pnr.reduce((r, x) => r | c2b(x), 0)));
			//Init flag fits = false
			fits = false;	
			//For each l such as (l <= F.length)
			for (l = 0; l <= f.length; l++) {		
				//Init FLD = F 	
				fld = f.slice();		
				//Init FP = PNR
				fp = pnr.map(x => x.slice());	
				//Convert FP to binary	
				for (let i in fp) fp[i] = c2b(fp[i]);			
				//For each s between 0 and max shift
				for (let s = 0; s <= maxs; s++) {
					//For each i such as (i in FP) FP[i] >>>= s
					for (let i in fp) fp[i] >>>= s === 0 ? 0 : 1;
					//If for each i such as (i in FP) ==> FLD[(l + i)] | FP[i] === FLD[(l + i)] ^ FP[i]
					// + Handle the case of the pieces having to fall straight ahead without sliding...
					if (fp.every((pi, i) =>{
						for (let tl = l; tl <= f.length; tl++) {
							let v1 = pi | (fld[(tl + 1 * i)] |= 0b0000000000);
							let v2 = pi ^ (fld[(tl + 1 * i)] |= 0b0000000000);
							if (v1 !== v2) return false;
						}
						return true;
					})) {
						//flag fits = true
						fits = true;
						//For each i such as (i in FP) and ((l + i) in FLD) FLD[(l + i)] ^= FP[i]
						for (let i in fp) fld[(l + 1 * i)] ^= fp[i];				
					};
					//Exit for				
					if (fits) break;
				//End for each
				}
				//If flag fits === true exit for	
				if (fits) break;
			//End for each
			}
			//If flag fits === true, current rotation fits in F : save FLD result for current rotation
			if (fits) fsave[r] = [fld, l, fp.length];		
		//End for each
		}
		//For each saved FLD value, extract the total number of blocks in FLD lines occupied by FP
		fsave.sort((a, b) => {
			let ali = a[1], bli = b[1], ale = ali + a[2], ble = bli + b[2], at = 0, bt = 0;
			for (let c = ali; c < ale; c++) at += a[0][c].toString(2).match(/[1]+/g).join("").length;
			for (let c = bli; c < ble; c++) bt += b[0][c].toString(2).match(/[1]+/g).join("").length;
			return bt - at;
		});	
		//Find the FLD value for which the number of blocks in the occupied lines is maximal...
			//Once found, F = FLD (optimal position found)	
		f = fsave[0][0];		
		//For each i such as (i in F) and F[i] = 1111111111
		f = f.reduce((r, x) => {
			//1 point gained
			//Delete F[i]
			x === 0b1111111111 ? counter++ : r.push(x);
			return r;
		}, []);
	//End for each
	}
	//Return...
	return counter;
}
/*                
[".","#","."],    	0100000000		==> P1	||  P1 falls, clockwise rotations = 0, right shift = 0 ==> OK :
["#","#","#"],    	1110000000			  	||  0100000000 		F[1] ^= P1[1]
["#",".","."],    	1000000000		==> P2	||  1110000000 		F[0] ^= P1[0] 
["#","#","#"],    	1110000000			  	||    
["#","#","."],    	1100000000		==> P3	||  P2 falls, clockwise rotations = 0, right shift = 3 ==> OK :
[".","#","#"],    	0110000000			  	||  0101000000 		F[1] ^= P2[1] >>>= 3
["#","#","#","#"], 	1111000000		==> P4	||  1111110000 		F[0] ^= P2[0] >>>= 3
["#","#","#","#"], 	1111000000		==> P5	||   
["#","#"],         	1100000000		==> P6	||  P3 falls, clockwise rotations = 0, right shift = 5 ==> OK :
["#","#"]          	1100000000			  	||  0101011000 		F[1] ^= P3[1] >>>= 5
											||  1111111100 		F[0] ^= P3[0] >>>= 5
                    0000000000		==> F	||  
                    0000000000			  	||  P4 falls, clockwise rotations = 1, right shift = 8 ==> OK :
											||  0000000010 		F[3] ^= P4[3] >>>= 8
                              			     ||  0000000010 		F[2] ^= P4[2] >>>= 8
                              			     ||  0101011010 		F[1] ^= P4[1] >>>= 8
                              			     ||  1111111110 		F[0] ^= P4[0] >>>= 8
                              			     ||  
                              			     ||  P5 falls, clockwise rotations = 1, right shift = 9 ==> OK :
                              			     ||  0000000011 		F[3] ^= P5[3] >>>= 9
                              			     ||  0000000011 		F[2] ^= P5[2] >>>= 9
                              			     ||  0101011011 		F[1] ^= P5[1] >>>= 9
                              			     ||  1111111111 		F[0] ^= P5[0] >>>= 9 ==> F[0] = 1111111111 ==> + 1 pt and F[0] disappears
                              			     ||  
                              			     ||  P6 falls, clockwise rotations = 0, right shift = 0 ==> OK :
                              			     ||  1100000011 		F[2] ^= P6[1]
                              			     ||  1100000011 		F[1] ^= P6[0]
                              			     ||  0101011011 		F[0]		 
*/
/* ======================== DEBUG VERSION ==============================
tetrisGame = p => {
	const rotate = a => {
		let h = a.length, w = a[0].length, r = [];
		for (let i = 0; i < w; i++) {
			for (var j = h - 1, t = []; j >= 0; j--) t.push(a[j][i]);
			r.push(t);
		}
		return r;
	},
	//----------------------------------------
	dsp = b => ("0000000000" + b.toString(2)).slice(-10),
	//----------------------------------------
	c2b = a => parseInt((a.join("").replace(/[.#]/g, x => ({".": "0", "#": "1"}[x])) + "0000000000").slice(0, 10), 2);
	var f = [0b0000000000], fits, r, s, fld, fp, fsave, l, counter = 0;
	//Init field FLD = 0000000000

	//For each falling piece PCE, find the optimal position in FLD
	for (pn of p) {		
		fsave = [,,,];
		//For each r between 0 and 3
		for (r = 0; r <= 3; r++) {		
			//Init P = Apply r 90° clockwise rotations to PCE 
			let pnr = pn.map(x => x.slice());
			for (let cr = 0; cr < r; cr++) pnr = rotate(pnr);			
			pnr = pnr.reverse();			
			//Find max shift for current rotation
			let maxs = Math.ceil(Math.log2(0b1111111111 ^ pnr.reduce((r, x) => r | c2b(x), 0)));
			//----------------------------------------
			console.log("????????");
			console.log("MAX SHIFT = " + maxs);
			//----------------------------------------			
			//Init flag fits = false
			fits = false;	
			//For each l such as (l <= F.length)
			for (l = 0; l <= f.length; l++) {		
				//Init F = FLD 	
				fld = f.slice();		
				//Init falling piece
				fp = pnr.map(x => x.slice());	
				//Convert falling piece to binary	
				for (let i in fp) fp[i] = c2b(fp[i]);			
				//For each s between 0 and max shift
				for (let s = 0; s <= maxs; s++) {
					//For each i such as (i in P) P[i] >>>= s
					for (let i in fp) fp[i] >>>= s === 0 ? 0 : 1;
					//If for each i such as (i in P) ==> F[(l + i)] | P[i] === F[(l + i)] ^ P[i]
					if (fp.every((pi, i) =>{
						for (let tl = l; tl <= f.length; tl++) {
							let v1 = pi | (fld[(tl + 1 * i)] |= 0b0000000000);
							let v2 = pi ^ (fld[(tl + 1 * i)] |= 0b0000000000);
							if (v1 !== v2) return false;
						}
						return true;
					})) {
						//flag fits = true
						fits = true;
						//For each i such as (i in P) and ((l + i) in F) F[(l + i)] ^= P[i]
						for (let i in fp) fld[(l + 1 * i)] ^= fp[i];				
					};
					//----------------------------------------
					console.log("====== PIECE 1 ==== SHIFT " + s);
					for (let i = fp.length - 1; i >= 0; i--) console.log(dsp(fp[i]));
					if (fits) {
						console.log("====== RESULT");
						for (let i = fld.length - 1; i >= 0; i--) console.log(dsp(fld[i]));
					}
					console.log("\n");
					//----------------------------------------
					//Exit for				
					if (fits) break;
				//End for each
				}
				//If flag fits === true exit for	
				if (fits) break;
			//End for each
			}
			//If flag fits === true
			if (fits) 			
				//Current rotation fits in FLD : save F result for current rotation
				//fsave[r] = fld, fsave2[r] = "Current rotation of height " + fp.length + " fits in field at line " + l;
				fsave[r] = [fld, l, fp.length];
				
			//Else
			else
				//(Add current rotation to top left...)
				//(save F result for current rotation)
				(null);			
		//End for each
		}
		//----------------------------------------		
		console.log("\n\n\n\n\n");
		for (let i = 0; i < fsave.length; i++) {
			test = fsave[i][0];
			console.log("====== FITS");
			console.log("Current rotation fits at line " + fsave[i][1] + " with length " + fsave[i][2]);
			console.log("====== ROTATION");
			for (let i = test.length - 1; i >= 0; i--) console.log(dsp(test[i]));
		}
		//----------------------------------------		
		//For each saved F value, extract the number of blocks per F line for current rotation 
		fsave.sort((a, b) => {		
			let ali = a[1], bli = b[1], ale = ali + a[2], ble = bli + b[2], at = 0, bt = 0;
			for (let c = ali; c < ale; c++) at += a[0][c].toString(2).match(/[1]+/g).join("").length;
			for (let c = bli; c < ble; c++) bt += b[0][c].toString(2).match(/[1]+/g).join("").length;
			return bt - at;
		});				
		//Find the F value for which the maximum number of blocks are occupied in lines F.length, F.length - 1, etc...
			//Once found, FLD = F (optimal position found)	
		//f = fsave[0];
		f = fsave[0][0];
		//----------------------------------------		
		console.log("\n\n\n\n\n");
		console.log("====== END RESULT");	
		for (let i = f.length - 1; i >= 0; i--) console.log(dsp(f[i]));
		console.log("\n");	
		//----------------------------------------		
		//For each i such as (i in F) and F[i] = 1111111111
			//1 point gained
			//Delete F[i]
		f = f.reduce((r, x) => {
			x === 0b1111111111 ? counter++ : r.push(x);
			return r;
		}, [])			
	//End for each
	}
	return counter;
}

*/