// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : for each pair of vertices pair V and V', check whether a
//                        vertex V'' exists so that V points to V'' and V'' points to V'
// 3. TIME COMPLEXITY   : O (V + E)
const efficientRoadNetwork = (cities:number, roads:Array<Array<number>>):boolean => {
    // smh
    if (cities === 1)
        return true;

    // init adjacency matrix
    const matrix:Array<Array<boolean>> = new Array(cities).fill(null)
        .map(() => new Array(cities).fill(false));

    // translate roads to adjacency matrix (undirected graph)
    for (let r = 0; r < roads.length; r++) {
        matrix[roads[r][0]][roads[r][1]] = true;
        matrix[roads[r][1]][roads[r][0]] = true;
    }

    // loop over adjacency matrix rows (cities)
    for (let r = 0; r < matrix.length; r++) {
        // init connections boolean array to false
        const connections = new Array(cities).fill(false);
        // loop over adjacency matrix columns (roads)
        for (let c = 0; c < matrix[r].length; c++) {
            // if matrix[row][col] === 1
            if (matrix[r][c] === true) {
                // connections[col] = true
                connections[c] = true;
                // loop over matrix[col] values (roads)
                for (let s = 0; s < matrix[c].length; s++) {
                    // if matrix[col][row2] === 1
                    if (matrix[c][s] === true)
                        // connections[row2] = true
                        connections[s] = true;
                }
            }
        }

        // if connections contain false
        if (connections.indexOf(false) >= 0)
            // return false
            return false;
    }

    // return true
    return true;
};

export {efficientRoadNetwork};