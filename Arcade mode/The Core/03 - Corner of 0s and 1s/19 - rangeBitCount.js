function rangeBitCount(a, b) {
    var t = 0;
    var c = 0;
    for (let i = a; i <= b; i++) {
        t <<= Math.floor(Math.log2(i)) + 1;
        t |= i;
    }
    for (; t > 0; t >>= 1) if (t % 2 > 0) c++;
    return c;
}

