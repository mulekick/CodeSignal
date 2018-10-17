function digitDegree(n) {
    var counter = 0;
    while(true) {
        if (n < 10) {return counter}
        n = n.toString().split("").reduce((r, x) => r + parseInt(x),0);
        counter++;
    }
}
