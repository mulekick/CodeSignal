'use strict'
firstOperationCharacter = e => {
    const 
    p1 = /[(]([0-9*\s]+)[)]/g,
    p2 = /[(]([0-9+\s]+)[)]/g,
    p3 = /[*]/g,
    p4 = /[+]/g;
    var idx;    
    idx = e.search(p1);
    if(idx !== -1) {
        e = e.match(p1)[0]; 
        return idx += e.search(p3)
    }
    idx = e.search(p2);
    if(idx !== -1) {
        e = e.match(p2)[0]; 
        return idx += e.search(p4)
    }
    idx = e.search(p3);
    if(idx !== -1)
        return idx;
    idx = e.search(p4);
    return idx; 
}