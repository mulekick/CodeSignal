'use strict'
polygonPerimeter = m => {
    const nc = [[-1, 0], [1, 0], [0, -1], [0, 1]], h = m.length, w = m[0].length;
    let n = 0;
    for (let y = 0; y < h; y++)
        for (let x = 0; x < w; x++) {
            m[y][x] ? 
                ((y, x) => {
                    for (c of nc) m[y + c[0]] && m[y + c[0]][x + c[1]] ? false : n++;
                })(y, x)
            : false;
        }
    return n;
}