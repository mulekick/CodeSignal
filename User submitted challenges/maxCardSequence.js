maxCardSequence = a => a.sort((a, b) => a - b).map(x => x % 2).filter((x, i, a) => i === 0 ? true : x !== a[i - 1]).length;
/*
  
 
Can you believe I wrote the following in 2 hours, got hit with TLE, then wrote the above in 3 minutes and got 300/300 ?


function checkSequence(arr, start, end) {
    const test = function(a, b, c){
        return (b > a && c > b) && (a % 2 === c % 2);
    }
    var result = true;
    
    if (end - start === 0) {return true};
    if (end - start === 1) {return arr[end] !== arr[start] && arr[end] % 2 !== arr[start] % 2};
    
    while (start < end - 1) {
        result = result && test(arr[start], arr[start + 1], arr[start + 2]);
        start++;
    }
    return result;
}
function maxCardSequence(cards) {
    //Trier tableau
    const array = cards.sort((a, b) => a - b);
    //Initialiser position = 0
    var res = [];
    //Boucler sur éléments du tableau
    for (let start = 0; start < array.length; start++) {
        //Créer une copie du tableau
        let tmp = array.slice(start);
        let end = 0;
        //Déterminer la longueur maximale de la séquence selon la position
        while (end < tmp.length) {
            if (checkSequence(tmp, 0, end)) {
                end++;
            } else {
                tmp.copyWithin(end, end + 1).pop();
            }
        }
        //Stocker la longueur trouvée dans le tableau des longueurs 
        res.push(tmp.length);   
        
        //Incrémenter la position
    }
    //Renvoyer le max du tableau des longueurs
    return Math.max(...res);
}
*/