// 1. TYPE OF GRAPH     : undirected, weighted
// 2. PROCESSING        : for each vertex V, check whether edges E and E' exist that are both
//                        connected to V and whose weight difference is less than or equal to 1
// 3. TIME COMPLEXITY   : O (V + E * V) --> O (V * (E + 1)) --> O (V * E)
const namingRoads = (roads:Array<Array<number>>):boolean => {
    const
        // identify total number of cities
        total = roads.reduce((r, x) => Math.max(r, x[0], x[1]), 0) + 1,
        // create adjacency list w/ objects shape
        cities:Array<Array<{edge:number;weight:number}>> = new Array(total).fill(null)
            .map(() => []);

    // smh
    if (total === 1)
        return true;

    // translate input to adjacency list (adjacency matrix drains out memory ...)
    for (let c = 0; c < roads.length; c++) {
        cities[roads[c][0]].push({edge: roads[c][1], weight: roads[c][2]});
        cities[roads[c][1]].push({edge: roads[c][0], weight: roads[c][2]});
    }

    // loop over adjacency list (cities)
    for (let v = 0; v < cities.length; v++) {
        // loop over current vertex edges (roads)
        for (let e = 0; e < cities[v].length; e++) {
            // loop over current vertex edges (roads)
            for (let f = 0; f < cities[v].length; f++) {
                // if e !== j && abs(cities[v][e].weight - cities[v][f].weight) <= 1
                if (e !== f && Math.abs(cities[v][e].weight - cities[v][f].weight) <= 1)
                    // return false
                    return false;
            }
        }
    }

    // return true
    return true;
};

export {namingRoads};