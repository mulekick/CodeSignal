function secondRightmostZeroBit(n) {
  return (-~n | -~(n | -~n)) & ~(n | -~n);
}
