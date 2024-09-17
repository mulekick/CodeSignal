// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : check vertices degrees for the graph / check vertices degrees for subgraphs
// 3. TIME COMPLEXITY   : O (V ^ 2 + E)
const isWheel = (matrix:Array<Array<boolean>>):boolean => {
    // smh broken test case
    for (let r = 0; r < matrix.length; r++) {
        if (matrix[r][r])
            return false;
    }

    // wheel is a N vertices graph with 2 * (N - 1) edges
    // it has to contain a subgraph w/ N - 1 vertices of degree 3 each in the original graph

    // store degrees by vertices ...
    const degrees:Array<number> = new Array(matrix.length).fill(0);

    // count vertice degrees ...
    for (let v = 0; v < matrix.length; v++) {
        for (let e = 0; e < matrix.length; e++) {
            if (e !== v && matrix[v][e] && matrix[e][v])
                degrees[v] += 1;
        }
    }

    // count graph edges
    const edges = degrees.reduce((r, x) => { return r += x; }, 0) / 2;

    // if the graph does not have exactly N vertices and 2 * (N - 1) edges, return false
    if (edges !== 2 * (matrix.length - 1))
        return false;

    // test every set of N - 1 vertices, return true if match found
    for (let v = 0; v < matrix.length; v++) {
        if (new Array(matrix.length).fill(null).map((_, i) => i).filter(x => x !== v).every(x => degrees[x] === 3))
            return true;
    }

    // else, return false
    return false;
};

export {isWheel};