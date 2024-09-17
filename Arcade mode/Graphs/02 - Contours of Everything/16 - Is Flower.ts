// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : check that the graph is connected / check vertices and edges properties for the graph / identify complete components in a disconnected graph
// 3. TIME COMPLEXITY   : O (V ^ 2 + E)
const isFlower = (matrix:Array<Array<boolean>>):boolean => {

    // flower is a connected graph w/ N vertices containing :
    // X complete subgraphs of (N - 1) / X vertices each w/ 1 common vertex
    // (N - 1) / X has to be greater than 2 so the graph must contain at least 3 vertices
    // N - 1 vertices have a degree of (N - 1) / X and 1 vertex has a dregree of N - 1

    // if the graph does not contain at least 3 vertices, return false
    if (matrix.length < 3)
        return false;

    const

        // test whether a n vertices subgraph is complete ...
        isComplete = (s:Array<number>):boolean => {
            for (let x = 0; x < s.length; x++) {
                for (let y = x + 1; y < s.length; y++) {
                    if ((matrix[s[x]][s[y]] && matrix[s[y]][s[x]]) === false)
                        return false;
                }
            }
            return true;
        },

        // extract component for current vertex
        getVertexComponent = (vertex:number, component:number, components:Array<number>, graph:Array<Array<boolean>>):Array<number> => {

            // 1. BASE CASE
            // current vertex is already part of a component
            if (typeof components[vertex] !== `undefined`)
                // return
                return components;

            // 2. PRE
            // start a new component from current vertex
            components[vertex] = component;

            // 3. RECURSION
            // for each edge e connected to current vertex (thus part of the same component)
            for (let edge = 0; edge < graph[vertex].length; edge++) {
                if (graph[vertex][edge] === true)
                    // recurse on e
                    components = getVertexComponent(edge, component, components, graph);
            }

            // 4. POST
            // ...

            // 5. RETURN
            return components;
        },

        // extract component for current graph
        getComponents = (graph:Array<Array<boolean>>):Array<Array<number>> => {

            // init components per vertex array, fill w/ undefined
            let components:Array<number> = new Array(graph.length);

            // for each vertex v
            for (let v = 0; v < graph.length; v++)
                // extract component for v
                components = getVertexComponent(v, v, components, graph);

            // init components list
            const result:Array<Array<number>> = new Array(graph.length).fill(null)
                .map(() => []);

            // reconstruct components from array
            for (let v = 0; v < graph.length; v++)
                result[components[v]].push(v);

            // filter and return
            return result.filter(x => x.length > 0);
        };

    // if the graph is not connected, return false
    if (getComponents(matrix).length !== 1)
        return false;

    // store degrees by vertices ...
    const degrees:Array<number> = new Array(matrix.length).fill(0);

    // count vertices degrees ...
    for (let v = 0; v < matrix.length; v++) {
        for (let e = 0; e < matrix.length; e++) {
            if (e !== v && matrix[v][e] && matrix[e][v])
                degrees[v] += 1;
        }
    }

    // handle the corner case of single petal flowers (complete graphs w/ N vertices in it) ...
    if (degrees.every(d => d === matrix.length - 1))
        return true;

    // otherwise, if the graph does not have a single edge of degree N - 1, return false
    if (degrees.filter(d => d === matrix.length - 1).length !== 1)
        return false;

    // init number of petals
    let n = -1;

    // if there is an X for which N - 1 vertices have a degree of (N - 1) / X, it is the number of petals ...
    for (let p = 2; p < matrix.length; p++) {
        if (degrees.filter(d => d === (matrix.length - 1) / p).length === matrix.length - 1)
            n = p;
    }

    // if petals was not found, return false
    if (n === -1)
        return false;

    const
        // copy the matrix
        copy:Array<Array<boolean>> = new Array(matrix.length).fill(null).map((_, i) => matrix[i].slice()),
        // find the central vertex
        central = degrees.findIndex(d => d === matrix.length - 1);

    // remove central vertex from the copy to create a disconnected graph ...
    for (let v = 0; v < copy.length; v++) {
        for (let e = 0; e < copy[v].length; e++) {
            if (v === central || e === central)
                copy[v][e] = false;
        }
    }

    // extract components from the copy and return true if the graph has exactly n complete subgraphs ...
    return getComponents(copy).filter(s => isComplete([ ...s, central ])).length === n;
};

export {isFlower};