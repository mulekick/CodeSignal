'use strict'
pairOfShoes = a => {
    var j = 0, k = 0, l = a.length, t = [];
    a = a.sort((a, b) => a[1] - b[1]);  
    do {
        k = a.findIndex((x, i, a) => i > j && x[1] !== a[j][1]);
        t.push(k === -1 ? a.slice(j) : a.slice(j, k));
        j = k;
    } while (k !== -1)
    return t.every(x => x.reduce((r, y) => r += y[0], 0) === x.length / 2);
}