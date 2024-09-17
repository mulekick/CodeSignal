// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : check that the graph is bipartite / check vertices and edges properties for the null subgraphs
// 3. TIME COMPLEXITY   : O (V + E)
const isCorrectlyCut = (matrix:Array<Array<boolean>>):boolean => {

    // diamond is a bipartite graph w/ 2 * N vertices
    // it must contain 2 null graphs of N vertices each
    // each vertice in it has to have a degree of N - 1

    const

        // set default color
        DEFAULT_COLOR = 5,

        // color vertices using DFS ...
        getVertexColors = (vertex:number, color:number | undefined, colors:Array<number>, graph:Array<Array<boolean>>):Array<number> => {
            // 1. BASE CASE
            // graph already flagged as not bipartite
            if (colors.length === 0)
                return [];
            // vertex already visited
            if (colors[vertex])
                // if not the first visited vertex for current traversal, check color
                // same color as adjacent one (graph not bipartite), return empty array
                // else, color pattern is ok (graph still bipartite), return colors
                return color && colors[vertex] === color ? [] : colors;

            // 2. PRE
            // set color for current vertex as different from the previous one
            colors[vertex] = (color || DEFAULT_COLOR) * -1;

            // 3. RECURSION
            // loop over edges for current vertex
            for (let edge = 0; edge < graph[vertex].length; edge++) {
                // recurse on edge and update colors
                if (graph[vertex][edge])
                    colors = getVertexColors(edge, colors[vertex], colors, graph);
            }

            // 4. POST
            // ...

            // 5. RETURN
            // return colors
            return colors;
        },

        // extract null graphs from bipartite graph ...
        bipartite = (graph:Array<Array<boolean>>):[Array<number>, Array<number>] | null => {

            // create colors by vertices array
            let colors = new Array(graph.length).fill(undefined);

            // aggregate results
            for (let v = 0; v < graph.length; v++)
                colors = getVertexColors(v, undefined, colors, graph);

            // if not bipartite, return null
            if (colors === null)
                return null;

            // reconstruct disjoint sets and return
            const [ set1, set2 ] = [ [], [] ] as [Array<number>, Array<number>];
            for (let v = 0; v < colors.length; v++) {
                if (colors[v] === DEFAULT_COLOR)
                    set2.push(v);
                else
                    set1.push(v);
            }

            return [ set1, set2 ];
        },

        // ...
        nullGraphs = bipartite(matrix);

    // if the graph is not bipartite, return false
    if (nullGraphs === null)
        return false;

    // read null graphs
    const [ a, b ] = nullGraphs;

    // if the 2 null graphs are not of equal length, return false
    if (a.length !== b.length)
        return false;

    // store degrees by vertices ...
    const degrees:Array<number> = new Array(matrix.length).fill(0);

    // count vertice degrees ...
    for (let v = 0; v < matrix.length; v++) {
        for (let e = 0; e < matrix.length; e++) {
            if (e !== v && matrix[v][e] && matrix[e][v])
                degrees[v] += 1;
        }
    }

    // return false if all vertice do not have a degree of N - 1
    if (degrees.some(d => d !== a.length - 1))
        return false;

    // return true
    return true;
};

export {isCorrectlyCut};