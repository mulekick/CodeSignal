'use strict'
treeBottom = t => {
    t = JSON.parse(t
        .replace(/\(/g, "[")
        .replace(/\)/g, "]")
        .replace(/\s/g, ","));
    const g = (a, l, r) => {
        l++;
        a[1][0] ? r.push(g(a[1], l, r)) : false;
        a[2][0] ? r.push(g(a[2], l, r)) : false;
        return [l, a[0]];
    };
    var r = [], m;
    r.push(g(t, 0, r)), m = Math.max(...r.map(x => x[0]));
    return r.filter(x => x[0] === m).map(x => x[1]);
}