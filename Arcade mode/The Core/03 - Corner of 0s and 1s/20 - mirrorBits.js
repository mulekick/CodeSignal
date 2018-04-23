function mirrorBits(a) {
    var t = 0;
    for (; a > 0; a >>=1) {
        t <<= 1;
        t |= a % 2;
    }
    return t;
}