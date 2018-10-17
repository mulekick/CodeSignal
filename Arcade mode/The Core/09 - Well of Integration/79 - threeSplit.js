'use strict'
threeSplit = a => { 
    const l = a.length; 
    var s1 = 0, s2, s3, a3 = a.reduce((r, x) => r += x, 0), c = 0;  
    for (let i = 0; i < l - 2; i++) {
        s1 += a[i], a3 -= a[i], s2 = 0, s3 = a3;
        for (let j = i + 1; j < l - 1; j++) {
            s2 += a[j], s3 -= a[j];
            if (s1 === s2 && s2 === s3) c++;
        }
    }
    return c;
}

/*
a = [0 -1 0 -1 0 -1]
L = 5

                            (0,i)       (i+1,j)     (j+1,L)
                                 
[0] [-1] [0 -1 0 -1]        (0,0)       (1,1)       (2,L)
[0] [-1 0] [-1 0 -1]        (0,0)       (1,2)       (3,L)
[0] [-1 0 -1] [0 -1]        (0,0)       (1,3)       (4,L)
[0] [-1 0 -1 0] [-1]        (0,0)       (1,4)       (5,L)
                                            
[0 -1] [0] [-1 0 -1]        (0,1)       (2,2)       (3,L)
[0 -1] [0 -1] [0 -1]        (0,1)       (2,3)       (4,L)
[0 -1] [0 -1 0] [-1]        (0,1)       (2,4)       (5,L)
                                            
[0 -1 0] [-1] [0 -1]        (0,2)       (3,3)       (4,L)
[0 -1 0] [-1 0] [-1]        (0,2)       (3,3)       (5,L)
                                            
[0 -1 0 -1] [0] [-1]        (0,3)       (4,4)       (5,L)
*/

/*
TLE's :

threeSplit = a => { 
    const sum = (i, j) => {
        let s = a[i];
        while (++i <= j) s += a[i];
        return s;
    }, l = a.length;    
    var s1, s2, s3, c = 0;  
    for (let i = 0; i < l - 2; i++) {
        s1 = sum(0,i);
        for (let j = i + 1; j < l - 1; j++) {
            s2 = sum(i + 1,j);
            if (s2 !== s1) continue;
            s3 = sum(j + 1,l - 1);
            if (s3 === s2) c++;
        }
    }
    return c;
}

threeSplit = a => {
    const s = b => b.reduce((r, x) => r += x, 0);
    const m = s(a) / 3;
    var a1, a2, a3, c = 0;
    for (let i1 = 0; i1 < a.length - 2;) {
        a1 = a.slice(0, ++i1);
        if (s(a1) !== m) continue;
        for (let i2 = i1; i2 < a.length - 1;) {
            a2 = a.slice(i1, ++i2);
            if (s(a2) !== m) continue;
            a3 = a.slice(i2);
            if (s(a3) === m) c++;
        }
    }
    return c;
}
*/