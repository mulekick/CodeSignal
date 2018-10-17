/* Beware of the slice vs deep copy trick */
/* slice() creates a new array containing references to the original array's elements and screws everything up*/
'use strict'
reverseOnDiagonals = m => {
    /*
    const dc = o => {
        let r = [];
        for (x of o) {
            let t = [];
            for (y of x) t.push(y);
            r.push(t);
        }
        return r;
    }
    */
    const dc = o => o.map(x => x.slice()); //Deep copy shorthand
    var l = m.length, f = 0, s = l - 1, c = dc(m);
    for (; f < l; f++, s--) {
        let i = l - f - 1;        
        c[i][i] = m[f][f];
        c[i][f] = m[f][s];
    }   
    return c;
}