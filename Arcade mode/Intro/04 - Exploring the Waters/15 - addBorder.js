function addBorder(picture) {
    var result = picture.map(function(value) {return "*" + value + "*"});
    var fill = Array(result[0].length + 1).join("*");
    result.push(fill);
    result.unshift(fill);
    return result;
}