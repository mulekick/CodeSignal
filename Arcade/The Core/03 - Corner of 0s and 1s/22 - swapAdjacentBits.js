function swapAdjacentBits(n) {
  return ((n & 2863311530) >> 1) | ((n & 1431655765) << 1) ;
}