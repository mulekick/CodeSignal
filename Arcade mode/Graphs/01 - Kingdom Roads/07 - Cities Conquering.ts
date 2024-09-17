// 1. TYPE OF GRAPH     : undirected, unweighted
// 2. PROCESSING        : use DFS to iteratively remove any vertice from the graph that is connected to zero or one edge
// 3. TIME COMPLEXITY   : O (V + E)
const citiesConquering = (n:number, r:Array<Array<number>>) => {
    // create mutable vertices list and adjacency list w/ objects shape
    let cities:Array<number> = new Array(n).fill(null)
        .map(() => -1);
    const roads:Array<Array<{edge:number;weight:number}>> = new Array(n).fill(null)
        .map(() => []);

    // translate roads to adjacency list (undirected and unweighted graph)
    for (let c = 0; c < r.length; c++) {
        roads[r[c][0]].push({edge: r[c][1], weight: 1});
        roads[r[c][1]].push({edge: r[c][0], weight: 1});
    }

    // DFS traversal function
    const conquer = (days:number, city:number, today:Array<number>, visited:Array<boolean>):boolean => {
        // 1. BASE CASE
        // city was already visited today
        if (visited[city] === true)
            return false;
        // mark city as visited
        visited[city] = true;
        // city has 2 or more neighboring free cities as of today, return false
        if (roads[city].filter(x => cities[x.edge] === -1).length >= 2)
            return false;
        // city is not conquered yet, mark as conquered today and return true
        if (today[city] === -1) {
            today[city] = days;
            return true;
        }

        // 2. PRE
        // ...

        // 3. RECURSION
        // init result
        let result = false;
        // loop over edges for current vertex
        for (let e = 0; e < roads[city].length; e++) {
            // perform a recursive call and aggregate results to check if new cities were conquered today ...
            const conquered = conquer(days, roads[city][e].edge, today, visited);
            result ||= conquered;
        }

        // 4. POST
        // ...

        // 5. RETURN
        // return result
        return result;
    };

    // init days = 1
    let day = 1;

    // while true
    while (true) {
        const
            // init visited today array
            visited = new Array(cities.length).fill(false),
            // let today = cities copy
            today = cities.slice();
        // init result
        let result = false;
        // loop over vertices list
        for (let city = 0; city < cities.length; city++) {
            const conquered = conquer(day, city, today, visited);
            // aggregate results
            result ||= conquered;
        }
        // if result === false
        if (result === false)
            // break
            break;
        // let cities = today
        cities = today;
        // increment days
        day += 1;
    }

    // return cities
    return cities;
};

export {citiesConquering};