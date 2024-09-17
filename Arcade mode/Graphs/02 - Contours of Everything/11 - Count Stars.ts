// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : identify components in a disconnected graph / check vertices and edges properties for components
// 3. TIME COMPLEXITY   : O (V + E * V) --> O (V * (E + 1)) --> O (V * E)
const countStars = (matrix:Array<Array<boolean>>):number => {
    const

        // N vertices component is a star if N - 1 vertices are of degree 1
        isStar = (component:Array<number>):boolean => {
            // return false if no edges at all
            if (component.length === 1)
                return false;

            // return true if 2 vertices
            if (component.length === 2)
                return true;

            // check
            let branches = 0;

            // eslint-disable-next-line no-restricted-syntax
            for (let v = 0, n = 0; v < component.length; v++, n = 0) {
                for (let e = 0; e < matrix[component[v]].length; e++) {
                    if (matrix[component[v]][e] === true) {
                        // smh broken test case w/ self referencing edges again ...
                        if (component[v] === e)
                            return false;
                        n += 1;
                    }
                }
                branches += n === 1 ? 1 : 0;
            }

            // return
            return branches === component.length - 1;
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

    // check and return
    return getComponents(matrix).filter(x => isStar(x)).length;
};

export {countStars};