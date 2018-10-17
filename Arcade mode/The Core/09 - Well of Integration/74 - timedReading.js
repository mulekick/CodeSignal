'use strict'
timedReading = (l, t) => {
    const c = (x) => (x >= 0x41 && x <= 0x5A) || (x >= 0x61 && x <= 0x7A);
    var w = "", n = 0;
    [...t].forEach((x, i, a) => c(x.charCodeAt()) ?
                                    (w += x, w !== "" && w.length <= l && i === a.length - 1 ? n++ : false) : 
                                    (w !== "" && w.length <= l ? n++ : false, w = ""))
    return n;
}