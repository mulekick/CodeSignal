// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : check vertices and edges properties for the graph / check that the graph is connected
// 3. TIME COMPLEXITY   : O (V + E)
const isTadpole = (matrix:Array<Array<boolean>>):boolean => {
    // smh broken test case
    for (let r = 0; r < matrix.length; r++) {
        if (matrix[r][r])
            return false;
    }

    // a tadpole is a connected graph w/ N vertices containing
    // 1 vertex of degree 1
    // 1 vertex of degree 3
    // N - 2 vertex of degree 2

    const

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

    // count vertice degrees ...
    for (let v = 0; v < matrix.length; v++) {
        for (let e = 0; e < matrix.length; e++) {
            if (e !== v && matrix[v][e] && matrix[e][v])
                degrees[v] += 1;
        }
    }

    // check and return
    return (degrees.filter(d => d === 3).length === 1) && (degrees.filter(d => d === 1).length === 1) && (degrees.filter(d => d === 2).length === matrix.length - 2);
};

export {isTadpole};