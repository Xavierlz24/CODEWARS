const sequenceSum = (begin, end, step) => {
  let suma = 0;
    
  for (let i = begin; i <= end; i += step) {
      suma += i;
  }
    
  return suma;
};