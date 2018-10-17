'use strict'
chessNotation = n => {
    const rotate = a => {
        let h = a.length, w = a[0].length, r = [];
        for (let i = 0; i < w; i++) {
            for (var j = h - 1, t = []; j >= 0; j--) t.push(a[j][i]);
            r.push(t);
        }
        return r;
    },
    n2a = n => {
        let r = [], p = /(\w+)/g, f;
        while (f = p.exec(n)) {
            r.push(f[1]
                    .replace(/\d/g, (x) => " ".repeat(x))
                    .match(/./g));
        }
        return r;
    },
    a2n = a => a.map(
        x => x
            .join("")
            .replace(/(\s+)/g, (x) => x.length))
            .join("/");
    return a2n(rotate(n2a(n)));
}