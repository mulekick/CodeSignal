'use strict'
shuffledArray = s => {
	var sl = 0,	sr = (a => {let t = 0, c = 1; while (c < a.length) t += a[c++]; return t})(s), c = 0;
	while (s[c] !== sl + sr) (sl += s[c++], sr -= s[c]);
	return s.slice(0, c).concat(s.slice(c + 1)).sort((a, b) => a - b);
}