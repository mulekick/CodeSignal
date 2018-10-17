'use strict'
newYearCelebrations = (t, m) => {
    var nyc = 0;
    const ttm = t => 
        t.split(":")
        .map(x => 1 * x)
        .reduce((r, x, i) => r + x * (i === 0 ? 60 : 1), 0);
    mdn = ttm("24:00"), 
    t = t === "00:00" ? 
        mdn : 
        ttm(t), 
    m = m.map((x, i, a) => i > 0 ? x - a[--i] : x);
    for (let i = 0; i < m.length; t += m[i] - 60, i++)
        if (t <= mdn && t + m[i] >= mdn) nyc++; 
    return nyc + (t <= mdn ? 1 : 0);
}