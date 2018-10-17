'use strict'
boxBlur = m => {
    const nc = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]], h = m.length, w = m[0].length;
    var r = new Array(h).fill("").map(x => new Array(w).fill(0));
    for (let y = 0; y < h; y++)
        for (let x = 0; x < w; x++) {
            let n = 0;
            for (c of nc) {             
                typeof m[y + c[0]] !== "undefined" ? 
                    (v = m[y + c[0]][x + c[1]],
                    typeof v !== "undefined" ? 
                        n += v
                    : false)
                : false;
            }
            r[y][x] = Math.floor(n / 9);
        }
    return r.map(x => x.slice(1, w - 1)).slice(1, h - 1);
}