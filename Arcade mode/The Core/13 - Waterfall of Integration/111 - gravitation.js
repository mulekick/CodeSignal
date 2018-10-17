'use strict'
gravitation = m => {
    const h = m.length,
    w = m[0].length,
    ar = new Array(h).fill(""),
    ac = new Array(w).fill(""),
    de = (a) => {
        let r = [];
        for (nc in ac) {
            let s = "";
            for (nr in ar) s += a[nr][nc];
            r.push(s.match(/^([0]+[1]+|[0]+)$/g) !== null);
        }
        return r;
    };
    var t;
    m = m.map(r => r.split("").map(x => x === "#" ? 1 : 0));
    while (!(t = de(m), t).some(x => x)) {
        for (let x = 0; x < w; x++)
            for (let y = h - 1, f = false; y > 0; y--) {
                m[y][x] === 0 && !f ? f = !f : false;
                f ? m[y - 1][x] ^= m[y][x] ^= m[y - 1][x] : false;
            }
    }
    return t.reduce((r, x, i) => x ? (r.push(i), r) : r, []);   
}