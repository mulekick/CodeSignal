// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : identify complete subgraphs / check vertices and edges properties for subgraphs
// 3. TIME COMPLEXITY   : O (V + E)
const isButterfly = (matrix:Array<Array<boolean>>): boolean => {
    // smh broken test case
    for (let r = 0; r < matrix.length; r++) {
        if (matrix[r][r])
            return false;
    }

    // butterfly is a 5 vertices graph containing on vertex of degree 4 and 4 vertices of degree 2

    // store degrees by vertices ...
    const degrees:Array<number> = new Array(matrix.length).fill(0);

    // count vertice degrees ...
    for (let v = 0; v < matrix.length; v++) {
        for (let e = 0; e < matrix.length; e++) {
            if (e !== v && matrix[v][e] && matrix[e][v])
                degrees[v] += 1;
        }
    }

    // check and return
    return degrees.filter(d => d === 4).length === 1 && degrees.filter(d => d === 2).length === 4;
};

export {isButterfly};