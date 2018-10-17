'use strict'
cellsJoining = (t, c) => {
    const rotate = a => {
        let h = a.length, w = a[0].length, r = [];
        for (let i = 0; i < w; i++) {
            for (var j = 0, t = []; j < h; j++) t.push(a[j][i]);
            r.push(t);
        }
        return r;
    },
    rs = s => {
        let r = [], p = /[+]([-]+)/g, f;
        while (f = p.exec(s)) r.push(f[1].length);
        return r;
    },
    cols = rs(t[0]);
    rows = rs(
        rotate(
            t.map(x => x
                .replace(/[|]/g, "-")
                .split(""))
        ).map(x => x
            .join(""))[0]);
        
    var [sy, sx] = [0, 0, 0, 0];
    for (let i = 0; i < c[1][0]; i++) 
        sy += rows[i] + 1;
    for (let i = 0; i < c[0][1]; i++) 
        sx += cols[i] + 1;  
        
    var [ey, ex] = [sy, sx];
    for (let i = c[1][0]; i <= c[0][0]; i++) 
        ey += rows[i] + 1;  
    for (let i = c[0][1]; i <= c[1][1]; i++) 
        ex += cols[i] + 1;  
    
    sx++;

    sy === 0 ? 
        t[sy] = t[sy].slice(0, sx) + "-".repeat(ex - sx) + t[sy].slice(ex) : 
        false;
    ey === t.length - 1 ? 
        t[ey] = t[ey].slice(0, sx) + "-".repeat(ex - sx) + t[ey].slice(ex) : 
        false;
        
    for (let y = sy + 1; y < ey; y ++)
        t[y] = 
            (sx - 1 === 0 ? 
                "|" : 
                t[y].slice(0, sx)) + 
            t[y].slice(sx, ex)
                .replace(/[-+|]/g, " ") + 
            (ex + 1 === t[y].length ?   
                "|" :               
                t[y].slice(ex))
    return t;
}