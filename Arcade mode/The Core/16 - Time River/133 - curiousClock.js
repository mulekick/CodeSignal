//I did it the hard way in the previous exercise, so now I'm resting up a bit ...
'use strict'
curiousClock = (s, l) => 
	(d = new Date(), d.setTime(2 * new Date(s).getTime() - new Date(l).getTime()), d)
	.toISOString()
	.replace(/[T]|[:]\d{2}[.]\d{3}Z/g," ")
	.trim();