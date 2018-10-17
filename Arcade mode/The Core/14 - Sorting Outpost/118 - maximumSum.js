'use strict'
maximumSum = (a, q) => {
    var is = new Array(a.length), rs = new Array(a.length);
    for (let i = 0; i < is.length; i++) is[i] = 0;
    for (rq of q)
        for (let i = rq[0]; i <= rq[1]; i++) ++is[i];
    is.sort((a, b) => b - a);
    return a.sort((a, b) => b - a).reduce((r, x, i) => r + x * is[i], 0);
}