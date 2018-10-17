function almostIncreasingSequence(sequence) {
    var bad = 0;
    for(var counter = 1; counter < sequence.length; counter++){
        if (sequence[counter] <= sequence[counter-1]) {
            bad++;
            if (bad > 1) return false;
            if (sequence[counter] <= sequence[counter-2] && sequence[counter+1] <= sequence[counter-1]) return false;
        }
    }
    return true
}

/*
function almostIncreasingSequence(sequence) {   
    var clone;
    var counter;
    for (counter = 0; counter < sequence.length; counter++) {
        clone = sequence.slice(0);
        clone.splice(counter, 1);
        if (clone.every(function(currentValue, index, arr){
            if (index == 0) {return true}
            return currentValue > arr[index - 1];
        })) {
            return true;
        }
    }
    return false;
}
*/
