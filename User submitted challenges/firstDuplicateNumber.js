/*
function firstDuplicateNumber(t) {
    t = t.filter((x,i) => t.lastIndexOf(x) != i).sort((a,b) => t.indexOf(a, t.indexOf(a) + 1) - t.indexOf(b, t.indexOf(b) + 1));
    return (typeof t[0] == "undefined") ? -1 : t[0];
}
//Solution de complexité O(n)
function firstDuplicateNumber(t) {
    var counts = [];
    for (var x = 0; x < t.length; x++) {
        if (counts[t[x]]) return t[x];
        counts[t[x]] = true;
    }
    return -1;
}
*/
//Solution de complexité O(1)
function firstDuplicateNumber(t) {
    for (var x = 0; x < t.length; x++) {
        var d = Math.abs(t[x]) - 1;
        if (t[d] < 0) return ++d;
        t[d] = 0 - t[d];
    }
    return -1;
}