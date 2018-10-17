function bishopAndPawn(bishop, pawn) {
    bishop = [...bishop].map((x,i) => (i == 0) ? x.charCodeAt(i) - 96 : parseInt(x));
    pawn = [...pawn].map((x,i) => (i == 0) ? x.charCodeAt(i) - 96 : parseInt(x));
    return (Math.abs((pawn[0] - bishop[0]) / (pawn[1] - bishop[1])) == 1);
}
