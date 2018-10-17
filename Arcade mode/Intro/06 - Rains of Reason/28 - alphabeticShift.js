function alphabeticShift(inputString) {

    //In memory of Stephen Hawking
    
    var from = "abcdefghijklmnopqrstuvwxyz";
    var to = "bcdefghijklmnopqrstuvwxyza";
    from = from.split("");
    to = to.split("");
    return inputString.replace(/\w/g, val => (from.indexOf(val) != -1) ? to[from.indexOf(val)] : val); 
}
