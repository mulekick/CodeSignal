'use strict'
isMAC48Address = s => {
    const p = s.match(/(\d|[a-f]){2}[-](\d|[a-f]){2}[-](\d|[a-f]){2}[-](\d|[a-f]){2}[-](\d|[a-f]){2}[-](\d|[a-f]){2}/gi);
    return p === null ? false : p[0] === s && p[0].length === s.length;
}
/*
isMAC48Address = s => {
    const a = s.split("-");
    const check = x => {
        let r = typeof parseInt(x, 16) === "number";
        r = r && !isNaN(parseInt(x, 16));
        r = r && parseInt(x, 16) <= 255 && parseInt(x, 16) >= 0;
        r = r && x.split("").every(x => (x.charCodeAt(0) <= 70 && x.charCodeAt(0) >= 65) || (x.charCodeAt(0) <= 57 && x.charCodeAt(0) >= 48));
        r = r && x.length === 2;
        return r;
    }
    return a.length == 6 && a.every(x => check(x))
}
*/