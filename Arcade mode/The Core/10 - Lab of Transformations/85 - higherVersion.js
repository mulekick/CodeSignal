'use strict'
higherVersion = (v1, v2) => {
    v1 = v1.split(".").map(x => 1 * x), v2 = v2.split(".").map(x => 1 * x);
    const l1 = v1.length, l2 = v2.length;
    var i = 0;
    while (i < l1 && i < l2) {
        if (v1[i] > v2[i]) return true;
        if (v1[i] < v2[i]) return false;
        i++;
    }
    return false;
}