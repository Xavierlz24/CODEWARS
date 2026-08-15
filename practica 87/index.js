export function arrayDiff(a, b) {
 const valor = new Set(b);
 return a.filter(num => !valor.has(num));
}
