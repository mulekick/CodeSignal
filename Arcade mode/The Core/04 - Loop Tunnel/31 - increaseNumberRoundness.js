function increaseNumberRoundness(n) {
    return [...n.toString()].map(x => parseInt(x)).reverse().some((x, i, a) => (i == a.length) ? false : x > 0 && a[i + 1] == 0)
}
