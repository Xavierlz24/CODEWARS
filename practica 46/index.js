function cannonsReady(gunners) {
  if (Object.values(gunners).includes('nay')) {
    return "Shiver me timbers!";
  }
  return "Fire!";
}