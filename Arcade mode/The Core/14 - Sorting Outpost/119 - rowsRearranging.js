'use strict'
rowsRearranging = m => m.sort((a, b) => a[0] - b[0]).every((x, i, a) => i === 0 || x.every((y, j) => y > a[i - 1][j]));