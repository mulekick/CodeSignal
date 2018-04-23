function lateRide(n) {
    var t = Math.floor(n / 60) + "" + n % 60;
    return [...t].reduce((r,x) => r + 1 * x, 0);    
}