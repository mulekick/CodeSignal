'use strict'
lrc2subRip = (lrc, sl) => {
	const lrct2srt = t => {		
		var lrct = t.replace(/[.]/, ":").slice(1, t.length - 1).split(":"),
		h = (h = "" + Math.floor(lrct[0] / 60)).length === 1 ? "0" + h : h,
		m = (m = "" + lrct[0] % 60).length === 1 ? "0" + m : m,
		s = lrct[1], x = lrct[2] + "0";
		return h + ":" + m + ":" + s + "," + x; 
	} 
	var sr = [], nl = 1, ll = lrc.length;
	for (let i = 0; i < ll; i++) {
		let li = [lrc[i].slice(0, 10), lrc[i].slice(11)];
		sr.push(
			"" + nl++,
			lrct2srt(li[0]) + " --> " + (
				i === ll - 1 ?
					sl + ",000" : 
					lrct2srt(lrc[i + 1].slice(0, 10))
				),
			li[1],
			""
		);
	}
	return (sr.pop(), sr);
}