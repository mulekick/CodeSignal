function arrayReplace(inputArray, elemToReplace, substitutionElem) {

    //In memory of Stephen Hawking
    
    return inputArray.map(function(val, index, arr){
        return (val == elemToReplace) ? substitutionElem : val;
    })
}
