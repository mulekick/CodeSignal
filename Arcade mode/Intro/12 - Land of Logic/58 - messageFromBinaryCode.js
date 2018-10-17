function messageFromBinaryCode(code) {
    var res = "";
    var l = code.length - (code.length % 8);
    for (var j = 0; j < l; j += 8) res += String.fromCharCode(parseInt(code.substr(j, 8), 2));
    return res;
}
