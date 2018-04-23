replaceMiddle = (arr) => {
    var i = arr.length / 2;
	var v = (i == Math.floor(i)) ? arr[--i] + arr[++i] : false;
	(i == Math.floor(i)) ? arr.splice(--i, 2, v) : false;
	return arr;
}