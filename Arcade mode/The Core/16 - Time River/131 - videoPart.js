'use strict'
videoPart = (p, t) => {
	const tts = t => 
		t.split(":")
		.map(x => 1 * x)
		.reduceRight((r, e, i) => (r += e * (60 ** (2 - i)), r), 0),
	gcd = (a,b) => 
		b ? 
			gcd(b, a % b) :
			a ;
	let tn = tts(t), pn = tts(p), cd = gcd(tn, pn);
	return [pn / cd, tn / cd];	
}