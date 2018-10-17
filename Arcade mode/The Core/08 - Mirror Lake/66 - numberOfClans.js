'use strict'
function numberOfClans(d, k) {
    var t = [];
    for (let i = 1; i <= k; i++) t.push(d.map(x => i % x === 0));
    return t.filter((x, i, a) => a.findIndex(y => {
        for (v in x)
            if (y[v] !== x[v]) return false;
        return true;
    }) === i).length;
}

/*
d = [2, 3, 4], k = 6

1             |          2 ND 1          |        2 ND 1       3 ND 1      4 ND 1
2 ND 1        |          2 D 2           |        2 D 2        3 ND 2      4 ND 2
3 ND 1        |          2 ND 3          |        2 ND 3       3 D 3       4 ND 3
4 ND 1        |          2 D 4           |        2 D 4        3 ND 4      4 D 4
              |          2 ND 5          |        2 ND 5       3 ND 5      4 ND 5
2             |          2 D 6           |        2 D 6        3 D 6       4 ND 6
2 D 2         |                          |
3 ND 2        |                          |
4 ND 2        |          3 ND 1          |
              |          3 ND 2          |
3             |          3 D 3           |
2 ND 3        |          3 ND 4          |
3 D 3         |          3 ND 5          |
4 ND 3        |          3 D 6           |
              |                          |
4             |                          |
2 D 4         |          4 ND 1          |
3 ND 4        |          4 ND 2          |
4 D 4         |          4 ND 3          |
              |          4 D 4           |
5             |          4 ND 5          |
2 ND 5        |          4 ND 6          |
3 ND 5        |                          |
4 ND 5        |                          |
              |                          |
6             |                          |
2 D 6         |                          |
3 D 6         |                          |
4 ND 6        |                          |
*/