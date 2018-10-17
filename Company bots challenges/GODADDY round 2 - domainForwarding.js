function domainForwarding(redirects) {

    var arrRedirectChains = [];
    var x;
    var y;
    var tmpLength;
    var index1;
    var index2;
    var flagValueFound;

    //For each element in redirects
    for (x = 0; x < redirects.length; x++) {
        //Init arrRedirectChains
        if (arrRedirectChains.length == 0) {
            //Append redirects[x] to arrRedirectChains
            arrRedirectChains.push(redirects[x]);           
        } else {    
            //For each element in arrRedirectChains
            flagValueFound = false;
            tmpLength = arrRedirectChains.length;   
            for (y = 0; y < tmpLength; y++) {
                index1 = arrRedirectChains[y].indexOf(redirects[x][0]);
                index2 = arrRedirectChains[y].indexOf(redirects[x][1]);
                switch (true) {
                //Find position of redirects[x][0] in arrRedirectChains[y]
                case (index1 != -1) :
                    //If found, insert redirects[x] after arrRedirectChains[y][position]
                    arrRedirectChains[y].splice(index1 + 1, 0, redirects[x][1]);
                    flagValueFound = true;
                    break;      
                //Find position of redirects[x][1] in arrRedirectChains[y]
                case (index2 != -1) :               
                    //If found, insert redirects[x] before arrRedirectChains[y][position]
                    arrRedirectChains[y].splice(index2, 0, redirects[x][0]);
                    flagValueFound = true;
                    break;
                //Else
                default :
                    //Do nothing
                    break;
                }
                //Once value is found, exit loop
                if (flagValueFound == true) {
                    break;
                }
            }
            //If value is still not found, neither elem of redirects[x] is present into an element of arrRedirectChains
            //In this case, append redirects[x] to arrRedirectChains
            if (flagValueFound == false) {
                arrRedirectChains.push(redirects[x]);
            }
        }
    }
    
    //remove duplicates and reverse arrRedirectChains elements so as the "final website" appears at index 0
    for (x = 0; x < arrRedirectChains.length; x++) {
        arrRedirectChains[x] = arrRedirectChains[x].filter(function(elem, pos, arr) { 
            return arr.indexOf(elem) == pos; 
        });     
        arrRedirectChains[x] = arrRedirectChains[x].reverse();
    }
    
    //Sort arrRedirectChains according to each element's first element
    arrRedirectChains.sort(Comparator);

    /*
    for (x = 0; x < arrRedirectChains.length; x++) {
        console.log("CHAIN " + x + " : " + arrRedirectChains[x].join(">>"));
    }   
    */
    
    //finally sort each element
    for (x = 0; x < arrRedirectChains.length; x++) {
        arrRedirectChains[x] = arrRedirectChains[x].sort();
    }
    
    //And return
    return arrRedirectChains;
}

function Comparator(a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
}