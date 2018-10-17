'use strict'
dayOfWeek = b => {
    const l = n => (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0, 
    bdy = b.split("-"), bm = 1 * bdy[0], bd = 1 * bdy[1], by = 1 * bdy[2], sbd = bm === 2 && bd === 29;
    var d = 0, ny = by;
    while (d !== 7) {
        let lny = l(ny), lnny = l(ny + 1);
        sbd ?
            d += 
                lny && ny > by ?
                    5 :
                ny % 100 === 0 && ny > by ? 
                    4 :     
                    0 :
            d += 
                lnny ? 
                    bm <= 2 ?
                        1 :
                        2 :
                lny ?
                    bm <= 2 ? 
                        2 : 
                        1 :
                    1 ;
        d > 7 ? d -= 7 : false;
        ny++;
    }
    sbd ? ny -= 1 : false;
    return ny - by;
}