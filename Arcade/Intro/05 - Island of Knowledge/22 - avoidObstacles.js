function avoidObstacles(inputArray) {
    var step = 1;
    while (true) {
        if (inputArray.reduce(function(result, val, index, arr) {
            return (val % step == 0) ? false : result;
        }, true) == true) {return step}
        step++;
    }
}