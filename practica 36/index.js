function differenceInAges(ages){
  const max = Math.max(...ages);
  const min = Math.min(...ages);
  
  const diferencia = max - min;
  
  return [min, max, diferencia];
}