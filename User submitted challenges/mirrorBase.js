'use strict'
mirrorBase = (n, b1, b2) => {
	let n2 = parseInt(n, b1).toString(b2);
	return n2 === n2.split("").reverse().join("");
}