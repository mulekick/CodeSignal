'use strict'
christmasTree = (n, h) => {     
    const m = n + h,
    maxw = 2 ** m - 1,
    numf = Math.floor((h + (1 ^ h % 2)) / 2) - 1,
    getr = i => 2 ** (i + 1) - 1,
    getl = i => maxw ^ (2 ** (m - i - 1) - 1),
    gets = a => a.map(x => x.map(   
        y => [...(y.toString(2))]
            .reverse()
            .join("")
            .replace(/\u0030/g, String.fromCharCode(0x20))
            .replace(/\u0031/g, String.fromCharCode(0x2A))  
        ).join("")
    );
    var ls = 1, le = ls + h, l = [],
    c = [[getl(0) << 1], [getl(0) << 1], [getl(0), 1, 1]],
    f = new Array(n).fill([getl(numf), 1 , getr(numf)]);
    for (let j = 0; j < n; j++) {
        for (let i = ls; i < le; i++) l.push([getl(i), 1, getr(i)]);
        ls++, le++;
    }
    c = gets(c);
    l = gets(l);
    f = gets(f);
    return c.concat(l.concat(f))
}
/*
n = 2
h = 4
maxw = 2 ** (n + m) - 1

["      *",               ["       *       ",       0
 "      *",                "       *       ",       0
 "     ***",               "     * * *     ",       1
 
 "    *****",              "    ** * **    ",       2 ** (i + 1) - 1    maxw ^ 2 ** (n + h - i - 1) - 1     i = 1
 "   *******",             "   *** * ***   ",       2 ** (i + 1) - 1    maxw ^ 2 ** (n + h - i - 1) - 1     i = 2
 "  *********",            "  **** * ****  ",       2 ** (i + 1) - 1    maxw ^ 2 ** (n + h - i - 1) - 1     i = 3
 " ***********",           " ***** * ***** ",       2 ** (i + 1) - 1    maxw ^ 2 ** (n + h - i - 1) - 1     i = 4
 
 "   *******",             "   *** * ***   ",       2 ** (i + 1) - 1    maxw ^ 2 ** (n + h - i - 1) - 1     i = 2
 "  *********",            "  **** * ****  ",       2 ** (i + 1) - 1    maxw ^ 2 ** (n + h - i - 1) - 1     i = 3
 " ***********",           " ***** * ***** ",       2 ** (i + 1) - 1    maxw ^ 2 ** (n + h - i - 1) - 1     i = 4
 "*************",          "****** * ******",       2 ** (i + 1) - 1    maxw ^ 2 ** (n + h - i - 1) - 1     i = 5
 
 "    *****",              "    ** * **    ", 
 "    *****"]              "    ** * **    "]
 
n = 1
h = 3
maxw = 2 ** (n + m) - 1
 
["    *",                  ["     *     ",          0
 "    *",                   "     *     ",          0
 "   ***",                  "   * * *   ",          1
 
 "  *****",                 "  ** * **  ",          2 ** (i + 1) - 1    maxw ^ 2 ** (n + h - i - 1) - 1     i = 1
 " *******",                " *** * *** ",          2 ** (i + 1) - 1    maxw ^ 2 ** (n + h - i - 1) - 1     i = 2
 "*********",               "**** * ****",          2 ** (i + 1) - 1    maxw ^ 2 ** (n + h - i - 1) - 1     i = 3
 
 "   ***"]                  "   * * *"] 
 
*/