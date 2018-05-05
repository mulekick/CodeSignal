//JS doesn't always have to be boring, it's time for a little fun
function lineUp(commands) {
	var c = 0, e = "";
	var a = {
		L:function(x, y){return (x | 6 == 15 || y) ? x ^ 9 : x | 9}, 
		R:function(x, y){return (x | 9 == 15 || y) ? x ^ 6 : x | 6}, 
		A:function(x, y){return x ^ 15}	
	};	
	[...commands].reduce(function(r, x, i, arr) {
		var b = a[x](r, x == e);
		if (b == 0 || b == 15) c++;
		e = x;
		return b;
	} , 0);
	return c;
}

/*
	0000
L	1001
R	0110
A	1111

	0000
L	OR		1001 ==> 1001	 
L	XOR		1001 ==> 0000	 
A	XOR		1111 ==> 1111	 
R	XOR		0110 ==> 1001	 
L	XOR		1001 ==> 0000	 

	0000
R	OR		0110 ==> 0110	 
L	OR		1001 ==> 1111	 
R	XOR		0110 ==> 1001	 

	0000
A	XOR		1111 ==> 1111	 
A	XOR		1111 ==> 0000	 
A	XOR		1111 ==> 1111	 
A	XOR		1111 ==> 0000	 

	0000
A	XOR		1111 ==> 1111	 
A	XOR		1111 ==> 0000	 
L	XOR		1001 ==> 1001	 
A	XOR		1111 ==> 0110	 
A	XOR		1111 ==> 1001	 
A	XOR		1111 ==> 0110	 
L	OR		1001 ==> 1111	 
A	XOR		1111 ==> 0000	 
R	OR		0110 ==> 0110	 
A	XOR		1111 ==> 1001	 
R	OR		0110 ==> 1111	 
*/