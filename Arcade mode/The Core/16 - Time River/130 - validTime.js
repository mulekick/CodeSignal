'use strict'
validTime = t => {
    t = t.split(":");
    if (t.length !== 2 || t.some(x => x.length !== 2)) return false;
    t = t.map(x => 1 * x);
    return t[0] >= 0 && t[0] <= 23 && t[1] >= 0 && t[1] <= 59;
}
