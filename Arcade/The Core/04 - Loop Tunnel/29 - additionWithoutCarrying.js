function additionWithoutCarrying(param1, param2) {
    var a = [...Math.max(param1, param2).toString()].map(x => parseInt(x)).reverse();
    var b = [...Math.min(param1, param2).toString()].map(x => parseInt(x)).reverse();
    var res = "", e;
    for (x in a) {
        if (x in b) e = (a[x] + b[x]).toString(); 
        else e = a[x].toString(); 
        res = e[e.length - 1] + res;
    }
    return parseInt(res);    
}
