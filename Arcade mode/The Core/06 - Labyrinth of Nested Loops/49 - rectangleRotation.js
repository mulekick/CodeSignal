'use strict'
rectangleRotation = (a, b) => {
    const f1 = (x) => - (x + Math.sqrt(a ** 2 / 2));
    const f2 = (x) => - x + Math.sqrt(a ** 2 / 2);
    const f3 = (x) => x + Math.sqrt(b ** 2 / 2);
    const f4 = (x) => x - Math.sqrt(b ** 2 / 2);    
    const v1 = (x, y) => y >= f1(x); 
    const v2 = (x, y) => y <= f2(x);
    const v3 = (x, y) => y <= f3(x); 
    const v4 = (x, y) => y >= f4(x);    
    const s = Math.max(a, b);
    let t = 0;
    for (let x = -s; x <= s; x++) {
        for (let y = -s; y <= s; y++) {
            let v = [x, y];
            let r = [v1(...v), v2(...v), v3(...v), v4(...v)];
            if (r.every(x => x)) t++
        }
    }
    return t;
}