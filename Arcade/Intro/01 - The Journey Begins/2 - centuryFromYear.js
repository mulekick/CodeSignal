function centuryFromYear(year) {
    var century = year / 100;
    var test = Number.isInteger(century) ? "parseInt(century.toString())" : "parseInt(century.toString()) + 1"; 
    return eval(test);
}