'use strict'
adaNumber = l => {
    const bases = [,,'0-1','0-2','0-3','0-4','0-5','0-6','0-7','0-8','0-9','0-9a','0-9a-b','0-9a-c','0-9a-d','0-9a-e','0-9a-f'];
    const isdecimal = x => x.match(/^\d[0-9]+\d$/) !== null;
    const isada = x => {
        if (x.match(/^1?\d{1}#[0-9a-fA-F]+#$/) === null) return false;
        let b = 1 * x.match(/^1?\d{1}/);
        return b < 2 || b > 16 ? false : eval('x.match(/^1?\\d{1}#[' + bases[b] + ']+#$/i) !== null');
    }
    l = l.replace(/_/g,'');
    return isdecimal(l) || isada(l)
}