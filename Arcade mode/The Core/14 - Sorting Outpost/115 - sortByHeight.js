'use strict'
sortByHeight = a => {
    var h = a.filter(x => x >= 0), c = 0;
    h = h.sort((a, b) => a - b);
    return a.map(x => x < 0 ? x : h[c++]);
}