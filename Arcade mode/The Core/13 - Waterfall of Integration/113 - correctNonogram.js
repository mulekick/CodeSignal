'use strict'
correctNonogram = (s, n) => {
    const rotate = a => {
        let h = a.length, w = a[0].length, r = [];
        for (let i = 0; i < w; i++) {
            for (var j = 0, t = []; j < h; j++) t.push(a[j][i]);
            r.push(t);
        }
        return r;
    }, 
    extract = (a, s) => {
        let h = w = a.length, b = Math.floor((s + 1) / 2), r = [];
        for (let i = b; i < h; i++) {
            for (var j = 0, t = [[]], st = ""; j < w; j++)
                j < b ? (Number.isInteger(1 * a[i][j]) ? t[0].push(1 * a[i][j]) : false) : st += a[i][j];
            r.push((t.push(st), t));
        }
        return r;
    }, check = l => {
        let v = l[1].replace(/[.]{2,}/g, ".").split(".").reduce((r, x) => x.length ? (r.push(x.length), r) : r, []);
        return l[0].every((x, i) => x === v[i]);
    };
    return extract(n, s).every(x => check(x)) && extract(rotate(n), s).every(x => check(x));
}