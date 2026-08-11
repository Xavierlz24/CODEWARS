export class Challenge {
  static solution(num ) {
  if (num < 0) return 0;
  
  
  let suma = 0;
  
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      suma += i;
    }
  }
  
  return suma;
 }
}