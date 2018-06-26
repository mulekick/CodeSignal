'use strict'
countElements = s => s
	.replace(/[\[\]]/g, "")
	.replace(/"[^"]+"/g, "arg")
	.split(",")
	.filter(x => x)
	.length;