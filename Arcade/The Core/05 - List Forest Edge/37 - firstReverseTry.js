function firstReverseTry(arr) {
    if (arr.length < 2) return arr;
    let f = arr.shift();
    arr.unshift(arr.pop());
    arr.push(f);
    return arr;
}