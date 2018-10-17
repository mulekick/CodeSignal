function remainderSum(int1, int2) {
    //Test 8 fix ...
    if (int1 < 0 && int2 < 0) {int1 = Math.abs(int1); int2 = Math.abs(int2)}
    var getRemainder = function (dividend, divisor) {
        if (dividend < 0 || divisor < 0) {dividend = 0 - Math.abs(dividend); divisor = Math.abs(divisor)}
        var quotient = 0;
        while (quotient * Math.abs(divisor) <= Math.abs(dividend)) quotient++;  
        return (dividend > 0) ? dividend - (--quotient * divisor) : quotient * divisor - Math.abs(dividend);
    }
    return (int1 == 0 || int2 == 0) ? -1 : getRemainder(int1, int2) + getRemainder(int2, int1);
}