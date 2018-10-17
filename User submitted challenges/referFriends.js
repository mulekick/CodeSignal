'use strict'
referFriends = ui => {
    let r = {};
    ui = JSON.parse(ui);
    for (o of ui) r[o["_id"]] = {user: o["username"], owed: 0};
    for (o of ui)
        if (o["referrerId"] in r) r[o["referrerId"]]["owed"] += 500;
    return Object.values(r).map(x => x["user"] + " $" + x["owed"]).sort();
}