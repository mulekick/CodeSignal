'use strict'
runnersMeetings = (p, s) => {
    const getp = (x, t) => Math.floor(x[0] + x[1] * t / 60);
    const getc = a => {
        let o = {}, d = [];
        for (let i = 0; i < a.length; i++) a[i][2] in o ? ++o[a[i][2]] : o[a[i][2]] = 1;
        for (n in o) d.push(o[n]);
        return Math.max(...d)
    }
    var so = [], ti = 0, ca = -1;
    for (let i = 0; i < p.length; i++) so.push([p[i], s[i], p[i]]);
    so = so.sort((a, b) => a[1] - b[1]);
    while (!so.every((x, i, a) => i > 0 ? x[2] >= a[i - 1][2] : true)) {
        for (let i = 0; i < so.length; i++) so[i][2] = getp(so[i], ti);
        let cv = getc(so);
        cv > 1 && cv > ca ? ca = cv : false;
        ti++;
    }
    return ca;
}