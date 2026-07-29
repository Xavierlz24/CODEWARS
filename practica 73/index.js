function findNextSquare(sq) {
  let r = Math.sqrt(sq);
  if (!Number.isInteger(r)) {
    return -1;
  }
  return (r + 1) ** 2;
}