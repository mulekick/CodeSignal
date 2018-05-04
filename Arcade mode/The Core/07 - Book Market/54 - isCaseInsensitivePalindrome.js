'use strict'
isCaseInsensitivePalindrome = s => {
    const p = Math.floor(s.length / 2);
	const l = s.toLowerCase();
	return s.length % 2 !== 0 
		? l.substring(0, p) === [...l.substring(p + 1)].reverse().join("") 
		: l.substring(0, p) === [...l.substring(p)].reverse().join("");
}