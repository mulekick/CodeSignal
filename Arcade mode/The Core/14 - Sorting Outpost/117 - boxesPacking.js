'use strict'
boxesPacking = (l, w, h) => {
    var bx = [];
    for (let i = 0; i < l.length; i++) bx.push([l[i], w[i], h[i]].sort((a, b) => b - a));
    return bx.sort((a, b) => b[2] - a[2]).every(
        (x, i, a) => i === a.length - 1 || [0, 1, 2].every(j => x[j] > a[i + 1][j])
    );
}