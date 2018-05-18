'use strict'
function decipher(c) {
	var r = "", i = 0, d = c[i];
	do {
		while (1 * d < 97) d += c[++i];
		r += String.fromCharCode(d);
		d = c[++i];
	} while (i < c.length)
	return r;
}
