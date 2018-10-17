'use strict'
pipesGame = state => {
    const $pipes = 
    [null,
    {bits: 0b0101, next: [{curflow: [ 1, 0], nextbit: 0b0100, updflow: [ 1, 0]}, {curflow: [-1, 0], nextbit: 0b0001, updflow: [-1, 0]}]},
    {bits: 0b1010, next: [{curflow: [ 0, 1], nextbit: 0b1000, updflow: [ 0, 1]}, {curflow: [ 0,-1], nextbit: 0b0010, updflow: [ 0,-1]}]},
    {bits: 0b0011, next: [{curflow: [-1, 0], nextbit: 0b1000, updflow: [ 0, 1]}, {curflow: [ 0,-1], nextbit: 0b0100, updflow: [ 1, 0]}]},
    {bits: 0b1001, next: [{curflow: [-1, 0], nextbit: 0b0010, updflow: [ 0,-1]}, {curflow: [ 0, 1], nextbit: 0b0100, updflow: [ 1, 0]}]},
    {bits: 0b1100, next: [{curflow: [ 1, 0], nextbit: 0b0010, updflow: [ 0,-1]}, {curflow: [ 0, 1], nextbit: 0b0001, updflow: [-1, 0]}]},
    {bits: 0b0110, next: [{curflow: [ 1, 0], nextbit: 0b1000, updflow: [ 0, 1]}, {curflow: [ 0,-1], nextbit: 0b0001, updflow: [-1, 0]}]},
    {bits: 0b1111, next: [{curflow: [ 1, 0], nextbit: 0b0100, updflow: [ 1, 0]}, {curflow: [-1, 0], nextbit: 0b0001, updflow: [-1, 0]},
                          {curflow: [ 0, 1], nextbit: 0b1000, updflow: [ 0, 1]}, {curflow: [ 0,-1], nextbit: 0b0010, updflow: [ 0,-1]}]}],
    $connected = (b, p) => {
        if (!state[p[0]] || !state[p[0]][p[1]]) return false;
        let np = $pipes[1 * state[p[0]][p[1]]];
        return np && (b & np["bits"]) === b;
    };
    var sources = [], sinks = [], flows = [], leaks = false, result = [];
    for (let i = 0; i < state.length; i++) {    
        let p;
        //Save all sources positions 
        p = /[a-z]/g;
        while (m = p.exec(state[i]))
            sources.push([m[0], [i, m["index"]]]);
        //Save all sinks positions
        p = /[A-Z]/g;
        while (m = p.exec(state[i]))
            sinks.push([m[0], [i, m["index"]]]);
    }
    sources.sort((a, b) => a[0] > b[0]), sinks.sort((a, b) => a[0] > b[0]);
    //For each source position
    for (so of sources) {   
        let sy = so[1][0], sx = so[1][1];
        //For each neighbor position connected to source
        [[[ 0, 1], 0b1000], [[-1, 0], 0b0001], [[ 1, 0], 0b0100], [[ 0,-1], 0b0010]]
        .forEach(v => {
            //Save as starting point of a water flow
            let [[y, x], b] = v, f;         
            if ($connected(b, [y += sy, x += sx])) {
                for (n of $pipes[1 * state[y][x]]["next"])
                    if (n["curflow"].toString() === v[0].toString())
                        b = n["nextbit"], f = n["updflow"];
                flows.push({
                    vector: f, pipes: [[y, x]], bits: b,
                    sink: sinks.find(si => si[0] === so[0].toUpperCase())[1], 
                    over: false
                })
            }
        });
    }
    //While all water flows are still not connected to the right sinks
    while (flows.some(v => !v["over"]) && !leaks) { 
        //For each water flow
        for (f of flows) {
            if (f["over"]) continue;
            //Move to next position according to current flow vector
            let [y, x] = f["pipes"][f["pipes"].length - 1];                 
            //If next position is current water flow's sink
            if ([y += f["vector"][0], x += f["vector"][1]].toString() === f["sink"].toString()) {
                //Flow is over
                f["pipes"].push([y, x]), f["over"] = true;              
            //If next position tests ok according to current position's pipe type and flow vector
            } else if ($connected(f["bits"], [y, x])) {
                //Save next position as current position in current water flow
                f["pipes"].push([y, x]);
                //Update current flow vector
                for (n of $pipes[1 * state[y][x]]["next"])
                    if (n["curflow"].toString() === f["vector"].toString())
                        f["vector"] = n["updflow"], f["bits"] = n["nextbit"];
            //If next position tests ko according to current position's pipe type and flow vector
            } else {
                //Leakage identified, flow is over
                f["pipes"].push([y, x]), f["over"] = true, leaks = true;            
            }
        }
    }
    //End while 
    //For each water flow, remove last element
    flows.forEach(f => (f["pipes"].pop(), result = result.concat(f["pipes"].map(c => c.toString()))));
    //Return the length of the intersection of all water flow's positions 
    result = result.sort().filter((x, i, a) => i === a.indexOf(x));
    return (leaks ? -1 : 1) * result.length;
}
/*
==== pipe ====
{
    bits: bit sequence,
    next: [ {curflow: valid flow vector 1, 
             nextbit: next pipe bit to test 1, 
             updflow: updated flow vector 1}, 
            {curflow: valid flow vector 2, 
             nextbit: next pipe bit to test 2}, 
             updflow: updated flow vector 2}]
}

$1 = {bits: 0101, 
    next: [{[ 1, 0], 2, [ 1, 0]}, {[-1, 0], 4, [-1, 0]}]},
$2 = {bits: 1010, 
    next: [{[ 0, 1], 1, [ 0, 1]}, {[ 0,-1], 3, [ 0,-1]}]},
$3 = {bits: 0011, 
    next: [{[-1, 0], 1, [ 0, 1]}, {[ 0,-1], 2, [ 1, 0]}]},
$4 = {bits: 1001, 
    next: [{[-1, 0], 3, [ 0,-1]}, {[ 0, 1], 2, [ 1, 0]}]},
$5 = {bits: 1100, 
    next: [{[ 1, 0], 3, [ 0,-1]}, {[ 0, 1], 4, [-1, 0]}]},
$6 = {bits: 0110, 
    next: [{[ 1, 0], 1, [ 0, 1]}, {[ 0,-1], 4, [-1, 0]}]},
$7 = {bits: 1111,
    next: [{[ 1, 0], 2, [ 1, 0]}, {[-1, 0], 4, [-1, 0]},
           {[ 0, 1], 1, [ 0, 1]}, {[ 0,-1], 3, [ 0,-1]}]}
           
==== algorithm ====        

    //Save all source positions 
    
    //Save all sink positions
    
    //For each source position
    
        //For each neighbor position connected to source

            //Save [source + position] as starting point of a water flow
            //Initialize current flow vector and current pipe type

    //While all water flows are still not connected to the right sinks
    
        //For each water flow
        
            //Move to next position according to current flow vector
            
                //If next position is current water flow's sink
                    //Do nothing
                    
                //If next position is another water flow's sink
                    //Wrong sink identified, exit while
                    
                //If next position tests ok according to current position's pipe type and flow vector
                    //Save next position as current position in current water flow
                    //Update current flow vector
                    
                //If next position tests ko according to current position's pipe type and flow vector
                    //Leakage identified, exit while
    
    //End while
    
    //For each water flow
        //Remove source
        //Remove sink (if reached)
        
    //Return the length of the intersection of all water flow's positions 
    
*/