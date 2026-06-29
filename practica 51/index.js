function match(candidate, job) { 
  
if(!candidate || candidate.minSalary === undefined){ 
    throw new Error('el salario minimo del candidato es obligatorio'); 
  } 
  
if(!job || job.maxSalary === undefined){
    throw new Error('el salario maximo del puesto es obligatorio');
}
  
const margenDescuento = candidate.minSalary * 0.10;
  
const minSalarioAjustado = candidate.minSalary - margenDescuento;
  
 return minSalarioAjustado <= job.maxSalary;
  
}