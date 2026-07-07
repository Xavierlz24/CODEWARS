function dontGiveMeFive(start, end){
  let contador = 0;
  
  for(let i = start; i <= end; i++){
    if(!/5/.test(i)){
      contador++;
    }
  }
  return contador;
}