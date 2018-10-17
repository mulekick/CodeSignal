function lineEncoding(s) {
    var t = [[s[0],1]];
    var ti = 0;
    for (var i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) {
            ++t[ti][1];
        } else {
            t.push([s[i],1]);
            ti++;
        }
    }
    return t.map(x => (x[1] > 1) ? x[1] + "" + x[0] : x[0]).join("")
}
