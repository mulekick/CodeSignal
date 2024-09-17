// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : for any vertices pair V and V' for which index V is even and index V' equals index V + 1,
//                        merge V and V' if an edge E connects them (https://en.wikipedia.org/wiki/Edge_contraction)
// 3. TIME COMPLEXITY   : O (V + E)
const mergingCities = (register:Array<Array<boolean>>):Array<Array<boolean>> => {
    // produce post merging vertices indexes array per vertex index
    const postMerge:Array<number> = new Array(register.length);

    // identify merged vertices indexes (vertex n connected to vertex n + 1)
    for (let c = 0, merged = 0; c < register.length; c++) {
        // persist post merge index
        postMerge[c] = Math.max(0, c - merged);
        // if current city absorbs next one, increment counter and skip next city
        if (c % 2 === 0 && register[c][c + 1] && register[c + 1][c]) {
            postMerge[c + 1] = Math.max(0, c - merged);
            merged++;
            c += 1;
        }
    }

    const
        // read max index from post merging vertices indexes array
        max = Math.max(...postMerge),
        // create updated register : adjacency matrix length max index + 1
        updated:Array<Array<boolean>> = new Array(max + 1).fill(null)
            .map(() => new Array(max + 1).fill(false));

    // loop over adjacency matrix rows (cities)
    for (let r = 0; r < register.length; r++) {
        // loop over adjacency matrix columns (roads)
        for (let c = 0; c < register[r].length; c++) {
            // if row !== col and edge exists
            if (r !== c && register[r][c])
                updated[postMerge[r]][postMerge[c]] = true;
        }
    }

    // remove self referencing edges
    for (let r = 0; r < updated.length; r++)
        updated[r][r] = false;

    // return updated register
    return updated;
};

export {mergingCities};