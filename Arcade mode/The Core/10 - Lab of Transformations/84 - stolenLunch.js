'use strict'
stolenLunch = n => {
    const f = String.fromCharCode, d = x => {
        let c = x.charCodeAt();
        return c >= 0x30 && c <= 0x39 ? f(0x61 + c - 0x30) : c >= 0x61 && c <= 0x6A ? f(0x30 + c - 0x61) : x;
    }
    var r = "";
    for (let i = 0; i < n.length; i++) r += d(n[i]);
    return r;
}