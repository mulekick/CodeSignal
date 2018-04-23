function isMAC48Address(inputString) {
	var a = inputString.split("-");
	var check = function (x) {
		var r = (typeof parseInt(x, 16) == "number");
		r = r && (isNaN(parseInt(x, 16)) == false);
		r = r && (parseInt(x, 16) <= 255 && parseInt(x, 16) >= 0);
		r = r && (x.split("").every(x => ((x.charCodeAt(0) <= 70 && x.charCodeAt(0) >= 65) || (x.charCodeAt(0) <= 57 && x.charCodeAt(0) >= 48)) ? true : false));
		r = r && (x.length == 2)
		return r;
	}
	return a.length == 6 && a.every(x => check(x))
}
