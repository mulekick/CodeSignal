function arrayMaximalAdjacentDifference(inputArray) {
    return inputArray.reduce(function(result, val, index, arr) {
        var diff = Math.abs(val - arr[index - 1])
        return (diff > result) ? diff : result;     
    },0)
}
