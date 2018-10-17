'use strict'
chessBishopDream = (board, pos, dir, s) => {    
    [h, w] = board, [py, px] = pos, [dy, dx] = dir;
    if (h === 1 && w === 1) return pos;     
    for (c = 1; c <= s; c++) {
        py += dy, px += dx, htbe = (py === -1 || py === h), hlre = (px === -1 || px === w);
        switch (true) {
            //Hit corner
            case (htbe && hlre) :
                dy *= -1, dx *= -1;
                py += dy, px += dx;
            break;      
            //Hit top/bottom edge
            case (htbe) :
                dy *= -1;
                py += dy;       
            break;          
            //Hit left/right edge
            case (hlre) :
                dx *= -1;
                px += dx;       
            break;
        }
        //console.log("[py, px] = " + [py, px] + "[dy, dx] = " + [dy, dx]);
        if ([py, px].every((x, i) => x === pos[i]) && [dy, dx].every((x, i) => x === dir[i])) {
            //console.log("Back at initial position and direction after " + c + " moves");
            //console.log((s % c) + " moves remaining to get to final position");
            c = s - s % c;
        }
    }
    return [py, px];
}

//Both above and below solutions work fine; however, the above is a perfect example of "thinking outside the box"...

/*
chessBishopDream = (board, pos, dir, s) => {    
    var bfr = [], counter = 1, last, step = -1;
    const h = board[0] - 1, w = board[1] - 1,
    cs = [[[0, 0], [-1, -1], [1, 1]],
          [[0, w], [-1, 1], [1, -1]],
          [[h, 0], [1, -1], [-1, 1]],
          [[h, w], [1, 1], [-1, -1]]],
    es = [[[0, null], [-1, 1], [1, 1], [0, 1]],
          [[0, null], [-1 , -1], [1, -1], [0, -1]],
          [[h, null], [1, 1], [-1, 1], [0, 1]],
          [[h, null], [1, -1], [-1, -1], [0, -1]],
          [[null, 0], [1, -1], [1, 1], [1, 0]],
          [[null, 0], [-1, -1], [-1, 1], [-1, 0]],
          [[null, w], [1, 1], [1, -1], [1, 0]],
          [[null, w], [-1, 1], [-1, -1], [-1, 0]]],
    hc = ([y, x], [dy, dx]) => {
        for (c of cs) {
            if ([y, x].every((v, i) => v === c[0][i]) && [dy, dx].every((v, i) => v === c[1][i])) {
                dy = c[2][0];
                dx = c[2][1];
            }
        }
        return [dy, dx];
    },
    he = ([y, x], [dy, dx]) => {
        for (e of es) {
            let cy = y === e[0][0] && [dy, dx].every((v, i) => v === e[1][i]);
            let cx = x === e[0][1] && [dy, dx].every((v, i) => v === e[1][i]);
            if (cy ^ cx) {
                y += e[3][0];
                x += e[3][1];
                dy = e[2][0];
                dx = e[2][1];       
                break;
            }
        }
        return [[y, x], [dy, dx]];
    },
    stack = ([py, px], [dy, dx]) => bfr.push(py + "." + px + "." + dy + "." + dx);
    if (h === 0 && w === 0) return pos; 
    for (; counter <= s;) {
        let tc = hc(pos, dir);
        let te = he(pos, dir);
        if (tc.every((v, i) => v === dir[i]) === false) {
            dir = tc;   
        } else if (te[1].every((v, i) => v === dir[i]) === false) {
            dir = te[1];
            pos = te[0];
        } else {
            pos[0] += dir[0];
            pos[1] += dir[1];
        }   
        counter++;      
        stack(pos, dir);    
        last = bfr.pop();           
        if (bfr.indexOf(last) === -1) {
            bfr.push(last);
        } else {
            step = s % bfr.length;
            break;
        }   
    }
    return step < 0 ? pos : 
                step === 0 ? bfr.pop().split(".").slice(0, 2).map(x => 1 * x) :
                    bfr[--step].split(".").slice(0, 2).map(x => 1 * x); 
}
*/