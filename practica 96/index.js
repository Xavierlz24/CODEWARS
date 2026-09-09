export function duplicateCount(text){
  const values = text.toLowerCase();
  const distinctValues = [... new Set(values)]; 
  const count = (s) => values.split(s).length - 1 > 1 ;
  return distinctValues.filter(value => count(value)).length;
}