'use strict'
digitDifferenceSort = ar => {   
    const ad = ar.map(x => {
        let nx = [...("" + x)].map(y => 1 * y);
        return Math.max(...nx) - Math.min(...nx);
    });
    return ar
    .map((x, i) => [x, ad[i], i])
    .sort((a, b) => a[1] - b[1] === 0 ? b[2] - a[2] : a[1] - b[1])
    .map(x => x[0]);
}