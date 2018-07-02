//======= GOLFED =====
assignJobApplications = (t, l, e, a) => {
	o = {}, r = t;
	for (c of l) o[c] = 1;
	return a.map(x => (x = x.split(" "), x[1] < e | !o[x[2]] ? -1 : (r %= t, r++ + 1)));
}

//======= CLEAN =====
/*
'use strict'
assignJobApplications = (t, l, e, a) => {
	var ol = {}, r = t;
	for (cl of l) ol[cl] = 1;
	return a.map(x => {	
		let v = x.split(" ");
		return v[1] < e || !(v[2] in ol) ? -1 : (r %= t, r++ + 1);
	});
}
*/