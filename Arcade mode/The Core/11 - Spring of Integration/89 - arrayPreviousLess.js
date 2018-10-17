'use strict'
arrayPreviousLess = a => a.reduce((r, x, i, a) => {
        let t = a.filter((y, j) => y < x && j < i);
        r.push(!t.length ? -1 : t.reverse()[0]);
        return r;
    }, []);