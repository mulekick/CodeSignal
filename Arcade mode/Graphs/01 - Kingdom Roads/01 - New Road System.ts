// 1. TYPE OF GRAPH     : directed, unweighted
// 2. PROCESSING        : for each vertex V, check whether the number of vertices pointing
//                        to V is the same as the number of vertices V points to
// 3. TIME COMPLEXITY   : O (V + E)
const newRoadSystem = (register:Array<Array<boolean>>):boolean => {
    const
        // create vertices list and adjacency list w/ objects shape
        cities:Array<{inc:number;out:number}> = new Array(register.length).fill(null)
            .map(() => ({inc: 0, out: 0})),
        roads:Array<Array<{edge:number;weight:number}>> = new Array(register.length).fill(null)
            .map(() => []);

    // translate adjacency matrix to adjacency list
    for (let c = 0; c < register.length; c++) {
        for (let r = 0; r < register[c].length; r++) {
            if (register[c][r] === true)
                roads[c].push({edge: r, weight: 1});
        }
    }

    // loop over adjacency list
    for (let c = 0; c < cities.length; c++) {
        // loop over edges for current vertex
        for (let r = 0; r < roads[c].length; r++) {
            // increment outgoing roads for current vertex
            cities[c].out += 1;
            // increment incoming roads for current edge
            cities[roads[c][r].edge].inc += 1;
        }
    }

    // return true if outgoing and incoming roads are equal for each vertex
    return cities.every(c => c.inc === c.out);
};

export {newRoadSystem};