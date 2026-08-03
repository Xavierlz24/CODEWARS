function nbYear(p0, percent, aug, p) {
   let years = 0;
 let poblacion = p0;
  
 const valor = percent / 100;
  
   while (poblacion < p) {
        poblacion = Math.floor(poblacion + (poblacion * valor) + aug);
        
        years++;
    }

    return years;
}