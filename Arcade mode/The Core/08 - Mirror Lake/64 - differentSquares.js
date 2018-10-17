'use strict'
differentSquares = (m) => {
    const w = m[0].length - 1, h = m.length - 1;
    var r = [];
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            r.push([m[i][j], m[i][j + 1], m[i + 1][j], m[i + 1][j + 1]]);
        }
    }
    return r.map(x => x.toString()).filter((x, i, a) => a.indexOf(x) == i).length
}
