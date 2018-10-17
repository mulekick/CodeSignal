'use strict'
holiday = (x, w, m, y) => {
    const months = 
    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    weekdays = 
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = 1, month = months.findIndex(x => x === m), year = y, holiday = new Date(year, month, day);    
    day += (x - 1) * 7 + (7 + weekdays.findIndex(x => x === w) - holiday.getDay()) % 7;
    holiday = new Date(year, month, day);
    return holiday.getMonth() === months.findIndex(x => x === m) ? holiday.getDate() : -1;
}