'use strict'
arrayConversion = a => {
    var r, t, i = 0;
    if (a.length === 1) return a[0];
    do {
        r = [];
        for (let j = 0; j < a.length; j += 2) r.push(i ? a[j] * a[j + 1] : a[j] + a[j + 1]);
        a = r.slice();
        i ^= 1;
    } while (a.length > 1)
    return a[0];
}