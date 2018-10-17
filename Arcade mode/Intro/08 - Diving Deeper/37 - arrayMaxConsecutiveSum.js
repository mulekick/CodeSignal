function arrayMaxConsecutiveSum(array, k) {

    var i;
    var start = 0;
    var end = start + k;
    var maxsum = 0;
    
    while (end <= array.length) {
        var tempsum = 0;
        for (i = start; i < end; i++) { 
            tempsum += array[i];
        }
        maxsum = (maxsum > tempsum) ? maxsum : tempsum;
        start++;
        end = start + k;
    }
    
    return maxsum;

}