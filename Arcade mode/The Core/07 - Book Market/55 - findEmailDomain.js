'use strict'
findEmailDomain = a => {
	var pos = a.lastIndexOf("@");
	return a.substr(++pos);
}
