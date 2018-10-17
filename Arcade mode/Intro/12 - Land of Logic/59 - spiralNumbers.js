function spiralNumbers(n) { 
    var l = n;
    var d = true;
    var b = false;
    var i = false;
    var x = 0;
    var y = 0;  
    var res = new Array(n).fill("");
    res = res.map(x => new Array(n).fill(""));
    for (var j = 1; j <= n*n && l > 0;) {
        var k;
        if (d && !i) {
            for (k = 0; k < l; k++) res[x][y++] = j++;x++;y--;
        } else if (d && i) {
            for (k = 0; k < l; k++) res[x][y--] = j++;x--;y++;  
        } else if (b && !i) {
            for (k = 0; k < l; k++) res[x++][y] = j++;x--;y--;
        } else if (b && i) {
            for (k = 0; k < l; k++) res[x--][y] = j++;x++;y++;
        }
        i = (b) ? !i : i;
        d = !d;
        b = !b;
        (b) ? l-- : false;
    }
    return res;
}

/*
function spiralNumbers(n) { 

    //longueur sequence = l
    //direction droite = d
    //direction bas = b
    //inverser direction = i
    
    var l = n;
    var d = true;
    var b = false;
    var i = false;
    var x = 0;
    var y = 0;  
    var res = new Array(n).fill("");
    res = res.map(x => new Array(n).fill(""));
    for (var j = 1; j <= n*n && l > 0;) {
        //console.log("putting " + l + " elements in array rightwise " + d + " downwise " + b + " reverse " + i);
        var k;
        if (d && !i) {
            for (k = 0; k < l; k++) res[x][y++] = j++;
            x++;
            y--;
        } else if (d && i) {
            for (k = 0; k < l; k++) res[x][y--] = j++;
            x--;
            y++;    
        } else if (b && !i) {
            for (k = 0; k < l; k++) res[x++][y] = j++;
            x--;
            y--;
        } else if (b && i) {
            for (k = 0; k < l; k++) res[x--][y] = j++;
            x++;
            y++;
        }
        i = (b) ? !i : i;
        d = !d;
        b = !b;
        (b) ? l-- : false;
    }
    return res;
}

*/