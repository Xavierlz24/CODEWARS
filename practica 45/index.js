function iceBrickVolume(radius, bottleLength, rimLength) {
   const ancho = 2 * radius;
  
  const logitud = ancho;
  
  const alto = bottleLength - rimLength;
  
  const  resultado= logitud * ancho * alto;
  
  return resultado / 2;
}
