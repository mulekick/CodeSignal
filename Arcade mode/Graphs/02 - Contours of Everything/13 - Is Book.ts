// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : check vertices degrees for the graph
// 3. TIME COMPLEXITY   : O (V + E)
const isBook = (matrix:Array<Array<boolean>>):boolean => {
    // smh broken test case
    for (let r = 0; r < matrix.length; r++) {
        if (matrix[r][r])
            return false;
    }

    // book is a N vertices graph with 2 * (N - 2) + 1 edges
    // N - 2 vertices in it have to have a degree of 2
    // 2 vertices in it have to have a degree of N - 1

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
    if (edges !== 2 * (matrix.length - 2) + 1)
        return false;

    // handle corner case of a complete 3 vertices graph ...
    if (matrix.length === 3 && edges === 3)
        return true;

    // check if the graph fullfills the requirements and return
    return degrees.filter(n => n === matrix.length - 1).length === 2 && degrees.filter(n => n === 2).length === matrix.length - 2;
};

export {isBook};