function isBeautifulString(string) {
	var lastSequenceLength = string.length;
	var charCode = 97;
	var start = 0;
	var end;

	string = string.split("").sort().join("");
    if (string.charCodeAt(0) != charCode) return false;
	while (string.length > 0) {	
		end = string.indexOf(String.fromCharCode(++charCode), start);
		end = (end == -1 && string[0] == string[string.length - 1]) ? string.length : end;
		if (end == -1 || end > lastSequenceLength) return false;
		string = (string.length == 1) ? "" : string.substring(end);
		lastSequenceLength = end;
		start = 0;
	}
    
    return true;
}