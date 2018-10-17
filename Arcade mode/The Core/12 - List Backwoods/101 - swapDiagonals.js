'use strict'
swapDiagonals = m => {
    const dc = o => o.map(x => x.slice());
    var l = m.length, f = 0, s = l - 1, c = dc(m);
    for (; f < l; f++, s--) {
        let i = l - f - 1;
        c[f][s] = m[f][f];
        c[f][f] = m[f][s];
    }   
    return c;
}