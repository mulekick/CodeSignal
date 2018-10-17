function differentSquares(matrix) {
    var res = [];

    w = matrix[0].length;
    h = matrix.length;

    w--;
    h--;
    
    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            res.push([matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]]);
        }
    }
    return res.map(x => x.toString()).filter((x, i, arr) => arr.indexOf(x) == i).length
}
