function differentRightmostBit(n, m) {
  return ~((n - m) | (m - n)) + 1;
}
