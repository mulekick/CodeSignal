// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : for each vertices pair V and V' where index V' equals index V + 1,
//                        rearrange the graph so that all edges connected to V are now connected to V'
// 3. TIME COMPLEXITY   : O (V + E)
const greatRenaming = (roads:Array<Array<boolean>>):Array<Array<boolean>> => {
    // init register
    const register:Array<Array<boolean>> = new Array(roads.length).fill(null)
        .map(() => new Array(roads.length).fill(false));

    // loop over adjacency matrix rows (cities)
    for (let r = 0; r < roads.length; r++) {
        // loop over adjacency matrix columns (roads)
        for (let c = 0; c < roads[r].length; c++) {
            // vertices indexes do not change, only edges do ...
            // vertice cities[r] in register is attached to edges from cities[r - 1] in matrix
            // edges from cities[r - 1] in matrix have to point to updated indexes in register
            if (r + 1 === roads.length && c + 1 === roads[r].length)
                continue;
            else if (r + 1 === roads.length)
                register[0][c + 1] = roads[r][c];
            else if (c + 1 === roads[r].length)
                register[r + 1][0] = roads[r][c];
            else
                register[r + 1][c + 1] = roads[r][c];
        }
    }

    // return register
    return register;
};

export {greatRenaming};