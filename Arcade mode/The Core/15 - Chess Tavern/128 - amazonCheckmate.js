/*
gmvs ==> "get moves"
kmvs ==> "white king moves"
iuka ==> "is position under white king attack ?"
knm ==> "knight moves"
aknm ==> "amazon knight moves"
sfab ==> "is position safe from amazon/bishop moves ?"
sfar ==> "is position safe from amazon/rook moves ?"
sfak ==> "is position safe from amazon/knight moves ?"
iuaa ==> "is position under amazon attack ?"
*/
'use strict'
amazonCheckmate = (k, a) => {   
    const gc = c => [c[0].charCodeAt() - 0x60, parseInt(c[1])], [xk, yk] = gc(k), [xa, ya] = gc(a),
    knm = (x, y) => 
        [[x + 1, y + 2], [x + 1, y - 2], [x + 2, y + 1], [x + 2, y - 1],
        [x - 1, y + 2], [x - 1, y - 2], [x - 2, y + 1], [x - 2, y - 1]],
    gmvs = ([x, y]) => {
        let nb =
        [   [[x - 1, y + 1], [x    , y + 1], [x + 1, y + 1]], 
            [[x - 1, y    ],                 [x + 1, y    ]], 
            [[x - 1, y - 1], [x    , y - 1], [x + 1, y - 1]]    ];
        y === 1 ? 
            nb.pop() : 
        y === 8 ? 
            nb.shift() : 
            false;
        x === 8 ? 
            nb = nb.map(v => (v.pop(), v)) : 
        x === 1 ? 
            nb = nb.map(v => (v.shift(), v)) : 
            false;
        return nb.reduce((r, v) => (v.forEach(e => r.push(e)), r), [])
    },
    kmvs = (n = gmvs([xk, yk]), n.push([xk, yk]), n),
    aknm = knm(xa, ya).reduce((r, v) => v.every(t => t > 0 && t < 9 ) ? (r.push(v), r) : r, []),
    iuka = ([x, y]) => 
        typeof kmvs.find(c => c[0] === x && c[1] === y) !== "undefined",
    sfak = ([x, y]) => 
        typeof aknm.find(c => c[0] === x && c[1] === y) === "undefined",
    sfab = ([x, y]) =>  
        (xa - x) / (ya - y) === 1 ? 
            (xk - x) / (yk - y) === 1 && 
                (xa > x ? 
                    xk > x && xa > xk : 
                    xk < x && xa < xk) :
        (xa - x) / (ya - y) === -1 ? 
            (xk - x) / (yk - y) === -1 && 
                (xa < x ? 
                    xk < x && xa < xk : 
                    xk > x && xa > xk) :
            true,
    sfar = ([x, y]) => 
        x === xa ? 
            xk === xa && 
                (ya > y ? 
                    yk > y && ya > yk : 
                    yk < y && ya < yk) :
        y === ya ? 
            yk === ya && 
                (xa > x ? 
                    xk > x && xa > xk : 
                    xk < x && xa < xk) : 
            true,
    iuaa = ([x, y]) => 
        ((sfab([x, y]) && sfar([x, y]) && sfak([x, y])) || (x === xa && y === ya)) === false;
        
    //Counters : checkmate, check, stalemate, default
    var cm = 0, ch = 0, st = 0, df = 0;
    //For each position
    for (i = 1; i <= 8; i++) 
        for (j = 1; j <= 8; j++) {  
            //If coords(position) = coords(white king) or coords(position) = coords(amazon) or coords(position) = white king's neighbor, skip  
            let c1 = i === xk && j === yk, c2 = i === xa && j === ya, c3 = iuka([i, j]);
            if (c1 || c2 || c3) continue;
            //If position is under amazon's attack, then check = true
            //All black king's moves are valid by default
            let cl = [i, j], mvs = gmvs(cl), check = iuaa(cl) ? true : false, vm = mvs.length;      
            //For each black king's move    
            for (m of mvs)  
                //If current move is under attack by amazon or white king, move is invalid
                if (iuaa(m) || iuka(m)) vm--;
            //Now we know the check situation and valid moves for the current position, so we can increment the counters
            check && vm === 0 ? cm++ :
                check && vm > 0 ? ch++ :
                    !check && vm === 0 ? st++ :
                        !check && vm > 0 ? df++ : false;
        }
    return[cm, ch, st, df];
}