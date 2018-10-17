function fileNaming(names) {
    var counters = [];
    var l = names.length;
    for (var i = 0; i < l; i++) {
        var t = names[i];
        (typeof counters[t] == "undefined") ? counters[t] = 1 : false;
        (names.indexOf(t) != i) ? names[i] += "(" + counters[t]++ + ")" : false;
        while (names.indexOf(names[i]) != i) names[i] = t + "(" + counters[t]++ + ")";
    }
    return names;
}
