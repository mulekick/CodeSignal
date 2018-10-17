'use strict'
isSubstitutionCipher = (n, c) => {
    const an = [...n], ac = [...c];
    var on = {}, oc = {};
    an.forEach((x, i) => x in on ? false : on[x] = ac[i]);
    ac.forEach((x, i) => x in oc ? false : oc[x] = an[i]);
    return an.every((x, i) => ac[i] === on[x]) && ac.every((x, i) => an[i] === oc[x]);
}