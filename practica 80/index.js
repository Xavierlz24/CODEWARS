var number = function(busStops){
  let total = 0;
  for(const [suben, bajan] of busStops ){
    total += suben - bajan;
  }
  return total;
}