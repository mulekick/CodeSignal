'use strict'
const reorder = (arr, e) => {
	const l = arr.length;
	const c = l >= e * 2;
	const n = c ? e : l - e;
	var j = 1;
	for (let i = e; i < e + n; i++) {
		arr.splice(j - 1, 0, ...arr.splice(i - 1, 2));
		j += 2;
	}
    if (!c && j < arr.length) arr.splice(l - 1, 0, ...arr.splice(j - 1, l - 1).reverse());
    return arr;
}
prisonForPrincesses = (cells, princesses, entrance) => {		
	var result = [], hostages, occupation, cell, r;
	while (princesses[0]) {		
		hostages = princesses.shift();			
		occupation = reorder(cells.map((x, i) => [x - hostages, ++i]), entrance);
		cell = occupation.findIndex(x => x[0] === 0);
		cell < 0 ? cell = occupation.findIndex(x => x[0] > 0) : false;
		if (cell >= 0) {
			r = occupation[cell][1];
			cells[r - 1] = -1;
			result.push(r);
			continue;
		}
		result.push(-1);
	}
	return result;
}

/*
l = longueur
e = entrée

i = extraction
j = insertion

l = 7 e = 2 	e opérations (l >= e * 2)

[0, 1, 2, 3, 4, 5, 6] i = 2 j = 1
[1, 2, 0, 3, 4, 5, 6] i = 3 j = 3
[1, 2, 0, 3, 4, 5, 6]

l = 7 e = 3 	e opérations (l >= e * 2)

[0, 1, 2, 3, 4, 5, 6] i = 3 j = 1
[2, 3, 0, 1, 4, 5, 6] i = 4 j = 3
[2, 3, 1, 4, 0, 5, 6] i = 5 j = 5
[2, 3, 1, 4, 0, 5, 6]

l = 7 e = 4 	(l - e) opérations (l < e * 2)

[0, 1, 2, 3, 4, 5, 6] i = 4 j = 1
[3, 4, 0, 1, 2, 5, 6] i = 5 j = 3
[3, 4, 2, 5, 0, 1, 6] i = 6 j = 5
[3, 4, 2, 5, 1, 6, 0]

l = 7 e = 5 	(l - e) opérations (l < e * 2)

[0, 1, 2, 3, 4, 5, 6] i = 5 j = 1
[4, 5, 0, 1, 2, 3, 6] i = 6 j = 3
[4, 5, 3, 6, 0, 1, 2] ==> [4, 5, 3, 6, 2, 1, 0] !!! INVERSER

l = 6 e = 2  	e opérations (l >= e * 2)

[0, 1, 2, 3, 4, 5] i = 2 j = 1
[1, 2, 0, 3, 4, 5] i = 3 j = 3
[1, 2, 0, 3, 4, 5]

l = 6 e = 3  	e opérations (l >= e * 2)

[0, 1, 2, 3, 4, 5] i = 3 j = 1
[2, 3, 0, 1, 4, 5] i = 4 j = 3
[2, 3, 1, 4, 0, 5] i = 5 j = 5
[2, 3, 1, 4, 0, 5]

l = 6 e = 4  	(l - e) opérations (l < e * 2)

[0, 1, 2, 3, 4, 5] i = 4 j = 1
[3, 4, 0, 1, 2, 5] i = 5 j = 3
[3, 4, 2, 5, 0, 1] 

l = 6 e = 5  	(l - e) opérations (l < e * 2)

[0, 1, 2, 3, 4, 5] i = 5 j = 1
[4, 5, 0, 1, 2, 3]  ==> [4, 5, 3, 2, 1, 0] !!! INVERSER

*/
/*
function prisonForPrincesses(cells, princesses, entrance) {		
	var result = [], hostages, left, right, lockedup, cl, cr;
	while (princesses[0]) {		
		hostages = princesses.shift();	
		lockedup = false;
		
		left = entrance;
		right = entrance - 1;	
		while(left >= 0 || right < cells.length) {		
			left--;
			right++;
			if (!cells[left] && !cells[right]) break;
			if (cells[left] === hostages){
				result.push(left + 1);
				cells[left] = -1;
				lockedup = true;
				break;
			}
			if (cells[right] === hostages){
				result.push(right + 1);
				cells[right] = -1;
				lockedup = true;
				break;
			}
		}
		
		if (lockedup == true) continue;
		
		left = entrance;
		right = entrance - 1;
		
		while(left >= 0 || right < cells.length) {		
			left--;
			right++;
			if (!cells[left] && !cells[right]) break;
			cl = cells[left] - hostages;
			cr = cells[right] - hostages;	
			if (cl > 0) {			
				result.push(left + 1);
				cells[left] = -1;
				lockedup = true;
				break;				
			} else if (cr > 0) {				
				result.push(right + 1);
				cells[right] = -1;
				lockedup = true;
				break;				
			} else {
				continue;			
			} 
		}
		if (lockedup == true) continue;
		result.push(-1);
	}
	return result;
}
*/