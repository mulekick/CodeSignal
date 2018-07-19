pyraminxPuzzle = (f, m) => {
	const 
	faces = ["F", "B", "L", "R"],
	mvs = [[0,1,2,3], [8,3,7,6], [4,6,5,1]],
	mvp = [[0,1,2,3], [4,6,5,1], [8,3,7,6]],	
	move = (trsl, mv, upc) => {
		let v = [[], [], []];
		trsl = trsl.split("").map(x => faces.indexOf(x));
		for (let i = 0; i < 3; i++)
			for (let j of mv[i]) {
				v[i].push(pyraminx[trsl[i]][j]);
				if (upc) break;
			}
		v.unshift(v.pop());	
		for (let i = 0; i < 3; i++)
			for (let j of mv[i]) {
				pyraminx[trsl[i]][j] = v[i].shift();
				if (upc) break;
			}
	},
	trsls = {
		"U": "FRL", "U'": "FLR", 
		"L": "LBF", "L'": "LFB", 
		"R": "RFB", "R'": "RBF", 
		"B": "BLR", "B'": "BRL"
	};
	var pyraminx = [], curmov;
	for (let facecol of f) pyraminx.push(facecol.repeat(9).split(""));	
	while (typeof (curmov = m.pop()) !== "undefined") {
		let up = curmov[0].match(/[A-Z]/), prim = curmov.match(/[']/);		
		move(trsls[curmov[0].toUpperCase() + (prim ? "" : "'")], (prim ? mvs : mvp), (up ? true : false));
	}
	return pyraminx;
}

/*
faceColors = ["R", "G", "Y", "O"] ==> [F, B, L, R]

Units												Face		Vertexes (TBLR)

[['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'], 	==> F		==> [U, L, R]
 ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], 	==> B		==> [B, R, L]
 ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'], 	==> L		==> [L, U, B]
 ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']] 	==> R		==> [R, B, U]
 
 "U" 	"u"		==> F > R > L > F ==> [1,2,3,4] > [9,4,8,7] > [5,7,6,2] > [1,2,3,4]
 "U'" 	"u'"	==> F > L > R > F ==> [1,2,3,4] > [5,7,6,2] > [9,4,8,7] > [1,2,3,4]
 "L"	"l"		==> L > B > F > L ==> [1,2,3,4] > [9,4,8,7] > [5,7,6,2] > [1,2,3,4]
 "L'" 	"l'"	==> L > F > B > L ==> [1,2,3,4] > [5,7,6,2] > [9,4,8,7] > [1,2,3,4]
 "R" 	"r"		==> R > F > B > R ==> [1,2,3,4] > [9,4,8,7] > [5,7,6,2] > [1,2,3,4]
 "R'" 	"r'"	==> R > B > F > R ==> [1,2,3,4] > [5,7,6,2] > [9,4,8,7] > [1,2,3,4]
 "B" 	"b"		==> B > L > R > B ==> [1,2,3,4] > [9,4,8,7] > [5,7,6,2] > [1,2,3,4]
 "B'" 	"b'"	==> B > R > L > B ==> [1,2,3,4] > [5,7,6,2] > [9,4,8,7] > [1,2,3,4]
*/