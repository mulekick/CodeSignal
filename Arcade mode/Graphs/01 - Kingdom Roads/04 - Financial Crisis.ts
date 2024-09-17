// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : for each vertex V in the input graph, remove V and return the resulting graph
// 3. TIME COMPLEXITY   : O (V * (V + E))
const financialCrisis = (roads:Array<Array<boolean>>):Array<Array<Array<boolean>>> => {
    // init solution
    const registers:Array<Array<Array<boolean>>> = [];

    // for remove = 0 to matrix length
    for (let remove = 0; remove < roads.length; remove++) {

        // init register = adjacency matrix (roads length - 1)
        const register:Array<Array<boolean>> = new Array(roads.length - 1).fill(null)
            .map(() => new Array(roads.length - 1).fill(false));

        // loop over adjacency matrix rows (cities)
        for (let r = 0; r < roads.length; r++) {
            // if row !== remove
            if (r !== remove) {
                // loop over adjacency matrix columns
                for (let c = 0; c < roads[r].length; c++) {
                    // if col !== remove
                    if (c !== remove) {
                        // if row > remove, row2 = row - 1, else row2 = row
                        // if col > remove, col2 = col - 1, else col2 = col
                        const [ row, col ] = [ r > remove ? r - 1 : r, c > remove ? c - 1 : c ];
                        // register[row2][col2] = 1
                        register[row][col] = roads[r][c];
                    }
                }
            }
        }

        // push register into registers
        registers.push(register);
    }

    // return registers
    return registers;
};

export {financialCrisis};