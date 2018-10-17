'use strict'
mostFrequentDigitSum = (n) => {
    const s = (x) => {
        const a = [..."" + x];
        for (i of a) x -= 1 * i;
        return x;
    }, w = (x) => {
        const a = [..."" + x];
        let b = 0;
        for (i of a) b += 1 * i;
        return b;
    }
    var t = [], o = {}, c = 0, r = 0;
    do {
        t.push(w(n));
        if (n === 0) break;
        n = s(n);
    } while (n >= 0)
    for (v of t) v in o ? ++o[v] : o[v] = 1;
    for (v in o) {
        v = 1 * v;
        if (o[v] === c) {   
            if (v > r)
                c = o[v];           
                r = v;
        } else if (o[v] > c) {
            c = o[v];
            r = v;
        }
    }
    return r;
}