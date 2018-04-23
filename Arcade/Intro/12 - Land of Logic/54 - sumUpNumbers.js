function sumUpNumbers(inputString) {
	var res = inputString.match(/\d+/g);
	return (res === null) ? 0 : res.reduce((r,x) => r += parseInt(x), 0);
}
