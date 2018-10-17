function absoluteValuesSumMinimization(a) {
    var sum = a.reduce((result, val) => result += Math.abs(val), 0);
    return a.reduce(function(result, val, index, arr){
        var x = val;
        var y = a.reduce(function(result, val, index, arr){
            return result += Math.abs(val - x);
        }, 0);
        if (y < sum) {
            sum = y;
            return val;
        } else {
            return result;
        }
    }, 0)
}