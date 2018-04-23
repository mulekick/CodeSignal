function differentSymbolsNaive(s) {
    return s.split("").sort().filter((x,i,arr) => (i < arr.length - 1 && x != arr[i + 1]) ? true : false).length + 1
}