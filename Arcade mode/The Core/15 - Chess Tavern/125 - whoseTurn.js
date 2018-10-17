'use strict'
whoseTurn = p => {
    const gc = c => [c[0].charCodeAt() - 0x60, parseInt(c[1])], 
    cc = ([x, y]) => x % 2 === 0 ? y % 2 !== 0 : y % 2 === 0;
    return p.split(";").map(x => cc(gc(x))).reduce((r, x) => r + 1 * x, 0) % 2 === 0;
}

/*
4 knights on cells of the same color ==> white's turn
3 knights on cells of one color, 1 knight on a cell of the other ==> black's turn
2 knights on cells of one color, 2 knights on cells of the other ==> white's turn

wbbw  |  bbbw |  bbbb  |   wbbb  |  wbwb        bwbw
> w   |  wwbw |  bbww  |   bwbb  |  wbbw        bwwb
      |  > b  |        |         |                    
      |       |  wwbb  |   wbww  |  bwbw        wbwb
      |       |  wwww  |   bwww  |  bwwb        wbbw
      |       |  >w    |         |                   
      |       |        |   bwbb  |  wbwb        bwbw
      |       |        |   wbbb  |  wbbw        bwwb
      |       |        |         |                  
      |       |        |   bwww  |  bwbw        wbwb
      |       |        |   wbww  |  bwwb        wbbw
      |       |        |   >b    |  >w etc...
*/