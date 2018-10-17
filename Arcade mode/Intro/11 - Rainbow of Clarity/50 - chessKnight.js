function chessKnight(cell) {
    var getcoord = (x => [x.charCodeAt(0) - 96, parseInt(x[1])]);
    var getmoves = (x => [[x[0] + 1, x[1] + 2],[x[0] + 1, x[1] - 2],
                         [x[0] + 2, x[1] + 1],[x[0] + 2, x[1] - 1],
                         [x[0] - 1, x[1] + 2],[x[0] - 1, x[1] - 2],
                         [x[0] - 2, x[1] + 1],[x[0] - 2, x[1] - 1]]);
    return getmoves(getcoord(cell)).reduce((r,x) => x.every(x => x > 0 && x < 9 ) ? ++r : r, 0);
}
