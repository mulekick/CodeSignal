function candles(candlesNumber, makeNew) {
    var burned = 0, leftovers = 0;
    while (candlesNumber > 0) {
        burned += candlesNumber;
        leftovers = candlesNumber + leftovers;
        candlesNumber = Math.floor(leftovers / makeNew);
        leftovers -= candlesNumber * makeNew;
    }
    return burned;
}