'use strict'
createAnagram = (s, t) => {
    var os = {}, ot = {}, c = 0;
    [...s].forEach(x => x in os ? ++os[x] : os[x] = 1);
    [...t].forEach(x => x in ot ? ++ot[x] : ot[x] = 1);
    Object.entries(ot).forEach(x => c += (x[0] in os ? Math.max(x[1] - os[x[0]], 0) : x[1]));
    return c;
}