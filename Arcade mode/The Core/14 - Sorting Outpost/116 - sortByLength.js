'use strict'
//sortByLength = a => a.sort((a, b) => a.length - b.length);
sortByLength = a => {
    let r = [a.shift()], i, v;
    while (typeof (v = a.shift()) !== 'undefined') {
        for (let i = 0; i <= r.length; i++) {
            if (i === r.length || r[i].length > v.length) {
                r.splice(i, 0, v);
                break;
            }
        }
    }
    return r;
}