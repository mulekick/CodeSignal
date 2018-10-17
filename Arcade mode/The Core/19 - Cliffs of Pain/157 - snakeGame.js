'use strict'
snakeGame = (b, c) => {
    var sn = new snake([], "", b), cmdr = true, nc, y, x;
    sn.init();  
    for (cmd of c) {
        cmdr = sn.move(cmd);
        if (!cmdr) break;
    }
    nc = sn.cells.length, sn.grid = sn.grid.map(x => ".".repeat(x.length).split(""));
    for (let i = 0; i < nc; i++) 
        ([y, x] = sn.cells[i], sn.grid[y][x] = !cmdr ? "X" : i === nc - 1 ? sn.head : "*")
    return sn.grid;
}
class snake {
    constructor(c, h, g) {
        this.cells = c, this.head = h, this.grid = g;
    }
    fncl(c) {
        let [y, x] = c;
        [[ 1, 0], [-1, 0], [ 0, 1], [ 0,-1]].forEach(v => {
            let [yn, xn] = [y + v[0], x + v[1]];
            if (this.grid[yn] && this.grid[yn][xn] && this.grid[yn][xn] !== "." && !this.cells.some(z => z[0] === yn && z[1] === xn)) 
                c = [yn, xn];
        });
        return c;
    }       
    init() {
        let h, n;
        for (let i = 0; i < this.grid.length; i++)
            (h = this.grid[i].join("").search(/[<>v^]/)) >= 0 ? this.cells.push([i, h]) : false;
        this.head = this.grid[this.cells[0][0]][this.cells[0][1]];
        n = this.fncl(this.cells[0]);
        while (n.toString() !== this.cells[0].toString()) 
            (this.cells.unshift(n), n = this.fncl(n));  
    }
    chck(c) {
        let [y, x] = c;
        return typeof this.grid[y] !== "undefined" && 
            typeof this.grid[y][x] !== "undefined" && 
                !this.cells.some((z, i, a) => z[0] === y && z[1] === x && i < a.length - 1);
    }
    move(cmd) {
        let [y, x] = this.cells[this.cells.length - 1];
        let r  = {
            "<": {          
                "F" : () => this.chck([y += 0, x +=-1]),
                "R" : () => (this.head = "^", null),
                "L" : () => (this.head = "v", null)},
            ">": {          
                "F" : () => this.chck([y += 0, x += 1]),
                "R" : () => (this.head = "v", null),
                "L" : () => (this.head = "^", null)},               
            "v": {          
                "F" : () => this.chck([y += 1, x += 0]),
                "R" : () => (this.head = "<", null),
                "L" : () => (this.head = ">", null)},               
            "^": {          
                "F" : () => this.chck([y +=-1, x += 0]),
                "R" : () => (this.head = ">", null),
                "L" : () => (this.head = "<", null)}
        }[this.head][cmd]();    
        r ? (this.cells.push([ y, x]), this.cells.shift()) : false;
        return r === false ? false : true;
    }
}