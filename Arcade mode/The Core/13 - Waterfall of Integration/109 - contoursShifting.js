'use strict'
contoursShifting = m => {
    const h = m.length, 
    w = m[0].length,
    getcc = () => {
        let a = [], x1 = 0, y1 = 0, x2 = w - 1, y2 = h - 1;
        for (; y2 - y1 >= 0 && x2 - x1 >= 0; x1++, y1++, x2--, y2--) a.push([x1, y1, x2, y2]);
        return a;
    },
    getic = cs => {
        let a = [], [x1, y1, x2, y2] = cs;
        for (let i = x1; i < x2; i++) a.push([y1, i]);
        if (y1 === y2) return (a.push([y1, x2]), a);
        for (let i = y1; i < y2; i++) a.push([i, x2]);
        if (x1 === x2) return (a.push([y2, x2]), a);
        for (let i = x2; i > x1; i--) a.push([y2, i]);
        for (let i = y2; i > y1; i--) a.push([i, x1]);
        return a;
    },
    getv = ic => {
        let a = [];
        for (c of ic) a.push(m[c[0]][c[1]]);
        return a;
    },
    setv = (ic, icv) => {
        let i = 0
        for (c of ic) m[c[0]][c[1]] = icv[i++];
        return;
    };
    var cc = getcc(), ics = [], i = 1;
    for (c of cc) ics.push(getic(c));
    for (ic of ics) setv(ic, ((a, d) => (d === 0 ? a.unshift(a.pop()): a.push(a.shift()), a))(getv(ic), (i ^= 1)));
    return m;
}
/*
h even, w even
matrix =   [[ 1,  2,  3,  4],       0,0     3,3         y1,x1           y2,x2
            [ 5,  6,  7,  8],       1,1     2,2         y1 = y2 - 1     x1 = x2 - 1
            [ 9, 10, 11, 12],
            [17, 18, 19, 20]]

h even, w odd
matrix =    [[ 1,  2,  3,  4, 0],   0,0     3,4         y1,x1           y2,x2
            [ 5,  6,  7,  8, 0],    1,1     2,3         y1 = y2 - 1 
            [ 9, 10, 11, 12, 0],
            [17, 18, 19, 20, 0]]

h odd, w even
matrix =    [[ 1,  2,  3,  4],      0,0     4,3         y1,x1           y2,x2
            [ 5,  6,  7,  8],       1,1     3,2                         x1 = x2 - 1
            [ 9, 10, 11, 12],
            [13, 14, 15, 16],
            [17, 18, 19, 20]]
    
h odd, w odd       
matrix =    [[ 1,  2,  3,  4, 0],   0,0     4,4         y1,x1           y2,x2
            [ 5,  6,  7,  8, 0],    1,1     3,3
            [ 9, 10, 11, 12, 0],    2,2     2,2         y1 = y2         x1 = x2
            [13, 14, 15, 16, 0],
            [17, 18, 19, 20, 0]]
*/