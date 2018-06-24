// ===== USING ARRAY SLICE =====
'use strict'
htmlTable = (t, r, c) => 
	!(t = t.slice(11, t.length - 13).split("</tr><tr>")
	.map(x => 
		x.slice(1, 3) === "th" ? 
			[] : 
			x.slice(4, x.length - 5).split("</td><td>")
	))[r] ? 
		"No such cell" : 
	!t[r][c] ? 
		"No such cell" : 
		t[r][c];	

		
/* ===== USING REGEXP =====
'use strict'
htmlTable = (t, r, c) => 
	!(t = JSON.parse(t
	.replace(new RegExp("<(/?(tr|td|table|th))>", "gi"), 
		(x) =>  
			x === "<table>" ? "[" : 
			x === "</table>" ? "]" :
			x === "<tr>" ? "[" : 
			x === "</tr>" ? "]," :
			x === "<th>" ? "{" : 
			x === "</th>" ? "}" :
			x === "<td>" ? "\"" : 
			x === "</td>" ? "\"," : "")
	.replace(new RegExp("({.+}|,]", "gi"),
		(x) =>
			x[0] === "{" ? "" : "]"
	)))[r] ? 
		"No such cell" : 
	!t[r][c] ? 
		"No such cell" : 
		t[r][c];
*/		
		
	