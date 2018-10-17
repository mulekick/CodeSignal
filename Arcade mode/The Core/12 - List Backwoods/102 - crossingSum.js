'use strict'
crossingSum = (m, a, b) => {
    let l = m.length, k = m[0].length, r = 0;
    for (let i = 0; i < l; i++)
        for (let j = 0; j < k; j++) i === a || j === b ? r += m[i][j] : false;
    return r;
}