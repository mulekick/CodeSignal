function arrayPacking(a) {
    var t = 0;
    var c = a.length;
    var s = 0;
    for (var i = 0; i < c; i++) {
        var d = a[i] << (s++ * 8);
        t |= d;
    }
    return t;
}