// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : check vertices and edges properties for the graph / identify complete subgraphs
// 3. TIME COMPLEXITY   : O (V + E)
const isBull = (matrix:Array<Array<boolean>>):boolean => {

    // bull is a 5 vertices graph that has to contain 5 edges as well as a 3 vertices complete subgraph

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

        // calculate all possible subsets of vertices for a given length ...
        combine = (current:number | null, subset:Array<number>, set:Array<number>, desired:number, subsets:Array<Array<number>>):Array<Array<number>> => {
            // for readability
            const isValue = typeof current === `number`;

            // 1. BASE CASE
            // if subset length equals desired length
            if (isValue && subset.length === desired - 1) {
                // append current value, push subset into subsets and return
                subsets.push([ ...subset, set[current] ]);
                return subsets;
            }

            // 2. PRE
            // push value into subset
            if (isValue)
                subset.push(set[current]);

            // 3. RECURSION
            // perform a recursive call on each value "greater" than current value
            // at this stage, all subsets including "lower" values have been added already
            for (let i = isValue ? current + 1 : 0; i < set.length; i++)
                combine(i, subset, set, desired, subsets);

            // 4. POST
            // pop value from subset
            if (isValue)
                subset.pop();

            // 5. RETURN
            // return subsets
            return subsets;
        },

        // count graph edges
        edges = matrix.reduce((r, x) => { return r += x.reduce((s, y) => { return s += y ? 1 : 0; }, 0); }, 0) / 2;


    // if the graph does not have exactly 5 edges, return false
    if (edges !== 5)
        return false;

    // create all possible 3 vertices subgraphs and tests whether they are complete
    const subgraphs = combine(null, [], [ 0, 1, 2, 3, 4 ], 3, []).filter(s => isComplete(s));

    // return true if the graph has exactly 1 complete subgraphs, false otherwise
    return subgraphs.length === 1;
};

export {isBull};