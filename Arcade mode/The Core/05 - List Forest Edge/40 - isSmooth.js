isSmooth = (arr) => {
    var i = arr.length / 2;
	var v = (i == Math.floor(i)) ? arr[--i] + arr[++i] : arr[Math.floor(i)];
	return arr.shift() == v && arr.pop() == v;
}
