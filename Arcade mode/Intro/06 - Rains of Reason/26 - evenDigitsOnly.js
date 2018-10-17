function evenDigitsOnly(n) {

    //In memory of Stephen Hawking
    
    return n.toString().split("").every(function(val, index, arr){return (val % 2 == 0) ? true : false;})
}
