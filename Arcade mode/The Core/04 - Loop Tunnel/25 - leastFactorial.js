function leastFactorial(n) {
    var o = 1, f = 1;
    for (;f < n;) f *= ++o;
    return f;
}
