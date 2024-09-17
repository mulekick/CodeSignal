// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : create the line graph (or edge graph) of the input graph (https://en.wikipedia.org/wiki/Line_graph)
// 3. TIME COMPLEXITY   : O (V + E)
const livingOnTheRoads = (register:Array<Array<boolean>>):Array<Array<boolean>> => {
    const
        // init mappings matrix (array of arrays)
        mappings:Array<Array<number>> = new Array(register.length).fill(null)
            .map((_, i) => register[i].map(() => -1)),
        // for readability
        search = (from:number, to:number):number => Math.max(mappings[from][to], mappings[to][from], -1),
        // create new vertices array w/ object shape
        roads:Array<{from:number;to:number}> = [];

    // use cities to create roads
    for (let r = 0; r < register.length; r++) {
        for (let c = 0; c < register[r].length; c++) {
            if (register[r][c] && c > r) {
                roads.push({from: r, to: c});
                mappings[r][c] = roads.length - 1;
                mappings[c][r] = roads.length - 1;
            }
        }
    }

    // create updated register = matrix of length roads (undirected graph)
    const updated:Array<Array<boolean>> = new Array(roads.length).fill(null)
        .map(() => new Array(roads.length).fill(false));

    // loop over roads w/ i
    for (let i = 0; i < roads.length; i++) {
        // loop over register[roads[i].to] w/ c
        for (let c = 0; c < register[roads[i].to].length; c++) {
            // if register[roads[i].to][c] = 1
            if (register[roads[i].to][c]) {
                // let next = search roads for road where from is roads[i].to and to is c
                const next = search(roads[i].to, c);
                // register[i][next] = 1
                if (next >= 0)
                    updated[i][next] = true;
            }
        }
        // loop over register w/ r
        for (let r = 0; r < register.length; r++) {
            // if register[r][roads[i].from] = 1
            if (register[r][roads[i].from]) {
                // let prev = search roads for road where from is r and to is roads[i].from
                const prev = search(r, roads[i].from);
                // register[i][prev] = 1
                if (prev >= 0)
                    updated[i][prev] = true;
            }
        }
    }

    // remove self referencing edges
    for (let r = 0; r < updated.length; r++)
        updated[r][r] = false;

    // return updated register
    return updated;
};

export {livingOnTheRoads};