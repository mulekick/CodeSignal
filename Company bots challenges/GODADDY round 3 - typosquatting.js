function typosquatting(n, domain) {
    
    var permutations;
    var numTypos = 0;
    var numPermutationsFromTypos;
    var arrdomains = [];
    var arrValuesNotToAdd = [];
    var index;
    var indexstart;
    var indexend;

    //Init
    arrdomains.push(domain);
    arrValuesNotToAdd[domain] = true;
    index = 0;
    
    while (true) {
        //Erase value
        numPermutationsFromTypos = 0;
        //Generate permutations for all elements and concatenate
        indexstart = index;
        indexend = arrdomains.length;
        for (counter = indexstart; counter < indexend; counter++) {     
            permutations = producePermutationsFromString(arrdomains[counter]);
            permutations = permutations.filter(function(elem, pos, arr) { 
                //Do not append duplicates nor original domain name 
                if ((arr.indexOf(elem) == pos) && (!arrValuesNotToAdd[elem])) {
                    numPermutationsFromTypos++;
                    return true;
                }
            });         
            permutations.forEach(function(permutation){
                arrValuesNotToAdd[permutation] = true;
                arrdomains.push(permutation);
            })
            index++;
        }
        //Remove original domain name
        if (arrdomains[0] == domain) {
            arrdomains.shift();
            index--;
        }       
        //If no permutations can be produced from the original domain name, no need to buy anything regardless of n, so return - 1
        if (!arrdomains.length) {
            return -1;
        //If no new permutation was produced by the last typo and we still have not hit n, all domains can be bought
        } else if (numPermutationsFromTypos == 0) { 
            return -1;
        //If arrdomains.length is less than n, increment typos
        } else if (arrdomains.length <= n) {                
            numTypos++; 
        //If arrdomains.length is more than n, return
        }  else if (arrdomains.length > n) {
            return numTypos;
        }   
    }
}

function producePermutationsFromString(str) {
    //Define position
    var cursor = 0;
    var arrChars;
    var firstChar;
    var secondChar;
    var arrPermutations = [];

    //Execute until position equals string length minus 1
    while (cursor < str.length) {
        arrChars = str.split("");
        //Exclude dots
        if (arrChars[cursor + 1] == ".") {
            cursor++;
            continue;
        }
        if (arrChars[cursor] == ".") {
            cursor++;
            continue;
        }       
        firstChar = arrChars[cursor];
        secondChar = arrChars[cursor + 1];
        arrChars.splice(cursor, 2, secondChar, firstChar); 
        arrPermutations.push(arrChars.join(""));
        cursor++;
    }
    
    return arrPermutations;
}