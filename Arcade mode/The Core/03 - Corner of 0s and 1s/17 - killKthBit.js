function killKthBit(n, k) {
  return - (Math.pow(2, --k) + 1) & n ;
}
