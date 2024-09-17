// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : add edges to the graph so that it becomes complete
//                        (https://en.wikipedia.org/wiki/Complete_graph)
// 3. TIME COMPLEXITY   : O (V + E)
const roadsBuilding = (cities:number, roads:Array<Array<number>>):Array<Array<number>> => {
    const
        // init solution
        solution:Array<[number, number]> = [],
        // init adjacency matrix
        matrix:Array<Array<boolean>> = new Array(cities).fill(null)
            .map(() => new Array(cities).fill(false));

    // translate roads to adjacency matrix (undirected graph)
    for (let r = 0; r < roads.length; r++) {
        matrix[roads[r][0]][roads[r][1]] = true;
        matrix[roads[r][1]][roads[r][0]] = true;
    }

    // loop over adjacency matrix rows (cities)
    for (let r = 0; r < matrix.length; r++) {
        // loop over adjacency matrix cols (roads)
        for (let c = 0; c < matrix[r].length; c++) {
            // if row !== col and matrix[row][col] === 0
            if (r !== c && matrix[r][c] === false) {
                // matrix[row][col] = 1
                matrix[r][c] = true;
                // matrix[col][row] = 1
                matrix[c][r] = true;
                // push lexicographically sorted tuple into solution
                solution.push([ Math.min(c, r), Math.max(c, r) ]);
            }
        }
    }

    // return solution
    return solution;
};

export {roadsBuilding};