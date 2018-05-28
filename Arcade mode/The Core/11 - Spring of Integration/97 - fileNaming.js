'use strict'
fileNaming = n => {
	var c = {};
	var l = n.length;
	for (var i = 0; i < l; i++) {
		var t = n[i];
		typeof c[t] == "undefined" ? c[t] = 1 : false;
		n.indexOf(t) != i ? n[i] += "(" + c[t]++ + ")" : false;
		while (n.indexOf(n[i]) != i) n[i] = t + "(" + c[t]++ + ")";
	}
	return n;
}
