function makeArrayConsecutive2(statues) {

    statues.sort(function(a, b){return a-b});
    return statues[statues.length - 1] - statues[0] + 1 - statues.length;
    
}
