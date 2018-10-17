function phoneCall(min1, min2_10, min11, s) {
    var t = Math.max(s - min1 - 9 * min2_10, 0);
    return 1 + Math.floor((s - t - min1) / min2_10) + Math.floor(t / min11);
}
