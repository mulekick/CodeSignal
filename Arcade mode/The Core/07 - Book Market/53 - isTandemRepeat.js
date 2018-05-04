'use strict'
isTandemRepeat = s => {
    const p = Math.floor(s.length / 2); 
    return s.substring(0, p) === s.substring(p);   
}