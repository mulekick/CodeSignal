'use strict'
perfectSquareOrCube = (x) => {
    const f = Math.floor, g = (x) => {
        var sr = Math.sqrt(1 * x), cr = Math.cbrt(1 * x);
        return sr === f(sr) ? 1 : cr === f(cr) ? 1 : 0;
    }, n = [..."" + x], l = n.length, ns = l === 1 ? n :
                                                l === 2 ? [n[0] + n[1], n[1] + n[0]] :
                                                    l === 3 ? [
                                                                n[0] + n[1] + n[2], 
                                                                n[0] + n[2] + n[1], 
                                                                n[2] + n[0] + n[1], 
                                                                n[2] + n[1] + n[0], 
                                                                n[1] + n[2] + n[0], 
                                                                n[1] + n[0] + n[2]] : 0;
    return ns.filter((x, i, a) => a.indexOf(x) === i).map(x => g(x)).reduce((r, x) => r += x, 0);       
}