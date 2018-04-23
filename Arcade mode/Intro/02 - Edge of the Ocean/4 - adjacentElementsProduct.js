function adjacentElementsProduct(inputArray) {
    var counter = 0;
    var product;
    var tmp;
    while (counter < inputArray.length - 1) {
        tmp = inputArray[counter] * inputArray[counter + 1];
        console.log(inputArray[counter] + " * " + inputArray[counter + 1] + " = " + tmp);
        product = ((tmp > product) || (typeof product == "undefined"))? tmp : product;
        counter++
    }
    return product;
}
