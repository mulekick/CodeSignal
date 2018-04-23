function equalPairOfBits(n, m) {
  return 2 ** Math.floor(Math.log2((n ^ m) ^ -~(n ^ m)));
}