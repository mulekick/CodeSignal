'use strict'
extractMatrixColumn = (m, c) => {
    var r = [];
    for (let i = 0; i < m.length; i++) r.push(m[i][c]);
    return r;
}