function bitReplace(a, l, r, b) {
    var g = a & ~(2 ** l - 1);
    var d = a & (2 ** (r - 1) - 1);
    var s = r - l + ((b == 0) ? 0 : Math.floor(Math.log2(b)));
    if (s >= 0) g <<= s; else g >>>= -s;    
    b <<= (d & g & 1) ? Math.floor(Math.log2(d)) + 1 : r - 1;
    return ~(2 ** 31) & (g | b | d);
}