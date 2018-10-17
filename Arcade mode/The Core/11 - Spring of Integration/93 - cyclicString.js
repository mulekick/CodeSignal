'use strict'
cyclicString = s => {
    const l = s.length;
    var p = 0; n = 1, r = [], s2 = "", l2 = 0;
    do {
        while (n <= l) s2 = s.slice(p, n++), l2 = s2.length, s2.repeat(Math.ceil(l / l2) + 1).search(s) !== -1 ? r.push(l2) : false;
        n = ++p + 1;
    } while (p < l)
    return Math.min(...r);
}

/*
cyclicString = s => {
    const l = s.length;
    var p = 0; n = 1, r = [], s2 = "", l2 = 0;
    do {
        while (n <= l) {
            s2 = s.slice(p, n++);
            l2 = s2.length;
            if (s2.repeat(Math.ceil(l / l2) + 1).search(s) !== -1) r.push(l2);
        }
        n = ++p + 1;
    } while (p < l)
    return Math.min(...r);
}
*/