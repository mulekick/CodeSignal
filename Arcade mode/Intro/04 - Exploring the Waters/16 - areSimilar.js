function areSimilar(a, b) {
    var n;
    var n2;
    var counter = 0;
    //Boucle sur a
    for (n = 0; n < a.length; n++) {
        //Trouver un index n avec a[n] <> b[n]
        if (a[n] != b[n]) { 
            //Si compteur permutation < 1
            if (counter < 1) {
                //Chercher dans b index y avec y > n et a[n] = b[n2]
                n2 = n + 1;
                while (n2 < b.length) {
                    //Si trouve, permuter index n et n2 dans b et incrementer compteur permutation
                    if ((a[n] == b[n2]) && (a[n2] == b[n])) {
                        var tmp = b[n];
                        b[n] = b[n2];
                        b[n2] = tmp;
                        counter++;
                        break;
                    }
                    n2++
                }   
                //si non trouve, renvoi faux
                if (n2 == b.length) {return false}              
            //Sinon
            } else {
                //Renvoi faux
                return false;
            }   
        }
    //Fin boucle
    }
    //renvoi vrai
    return true;
}