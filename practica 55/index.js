function betterThanAverage(classPoints, yourPoints) {
  const suma = classPoints.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  const promedio = suma / classPoints.length;
  
  if(promedio < yourPoints ) {
    return true;
  }else{
    return false;
  }
}
