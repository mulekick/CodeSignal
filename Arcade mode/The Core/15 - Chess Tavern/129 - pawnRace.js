'use strict'
pawnRace = (w, b, m) => {
    const gc = c => [c[0].charCodeAt() - 0x60, parseInt(c[1])];
    var [xw, yw] = gc(w), [xb, yb] = gc(b), mv = m === "w" ? 0 : 1;
    if (xw === xb && yw <= yb) return "draw";
    while (true) {
        if (yw >= yb || Math.abs(xw - xb) !== 1) {
            let wrm = 
                yw === 2 ? 
                    5 : 
                    8 - yw;
            let brm = 
                yb === 7 ? 
                    5 : 
                    yb - 1; 
            return wrm === brm ? 
                        mv === 0 ? "white" : "black" :
                        Math.min(wrm, brm) === wrm ? "white" : "black";
        } else {
            if (yw === yb - 1) return mv === 0 ? "white" : "black";
            mv === 0 ? 
                yw += yw === 2 ? 
                    yw + 2 === yb - 1 ? 1 : 2 :
                    1 :
                yb -= yb === 7 ? 
                    yb - 2 === yw + 1 ? 1 : 2 :
                    1 ;
        }
        mv ^= 1;
    }
}
/*
    //-------------------------------------------------------
    //Si w[x] === b[x] et w[y] <= b[y] ==> draw

    //Tant que w[y] < 8 et que b[y] > 1

        //Si w[y] >= b[y] ou abs(w[x] - b[x]) !== 1 (aucun pion ne peut être pris)
        //(Le but du jeu est d'arriver à la première/dernière ligne)

            //Si w[y] === 2
                //wrm = (1 * 2) + (4 * 1) = 5
            //Sinon
                //wrm = 8 - w[y]
                
            //Si b[y] === 7
                //brm = (1 * 2) + (4 * 1) = 5
            //Sinon
                //brm = b[y] - 1
            
            //Si wrm === brm 
                //==> win = move(w, b)
            //Si wrm === brm - 1 et move = b
                //==> draw
            //Si wrm - 1 === brm et move = w
                //==> draw
            //Sinon 
                //==> win = min(wrm, brm)
            
            
        //Sinon (un pion peut prendre l'autre)
        //(Le but du jeu est de prendre le pion adverse)

            //Si w[y] === b[y] - 1
                    //==> win = move(w, b)
                
            //Si w[y] === 2
                //Si w[y] + 2 === b[y] - 1 (place le pion en danger d'être pris)
                    //w[y] += 1
                //Sinon
                    //w[y] += 2             
            //Sinon
                //w[y] += 1
                            
            //Si b[y] === 7
                //Si b[y] - 2 === w[y] + 1 (place le pion en danger d'être pris)
                    //b[y] -= 1
                //Sinon
                    //b[y] -= 2             
            //Sinon
                //b[y] -= 1
            
    //Coup suivant
    //-------------------------------------------------------
*/