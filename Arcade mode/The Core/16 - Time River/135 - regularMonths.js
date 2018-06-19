/*If you don't want to use JS Date Objects, you need a starting point in time ...*/
'use strict'
regularMonths = rm => {
	const rym = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	lym = [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	ily = y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
	var rm = rm.split("-").map(x => 1 * x), [fm, fy] = rm,
	frm = "06-1970".split("-").map(x => 1 * x), [m, y] = frm,
	d = 0, rms = [frm];
	do {
		cym = ily(y) ? lym : rym; 		
		d += cym[m] % 7;
		d %= 7;
		m++ === 12 ? (m = 1, y++) : false; 
		d === 0 ? rms.push([m, y]) : false;
	} while (y <= 2101)
	for (var i = rms.length - 1; i >= 0; i--)
		if (fy > rms[i][1] || (fy === rms[i][1] && fm >= rms[i][0])) break;
	return rms[++i].map(x => "0" + x).map((x, i) => x.slice(x.length - (i === 0 ? 2 : 4))).join("-");
}
