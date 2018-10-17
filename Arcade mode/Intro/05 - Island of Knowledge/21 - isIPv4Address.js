function isIPv4Address(inputString) {   
    return inputString.split(".").length == 4 && inputString.split(".").every(function(value){return !isNaN(value) && (parseInt(value) >=0) && (parseInt(value) <= 255)})   
}