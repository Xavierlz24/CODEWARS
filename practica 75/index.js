export function printerError(s)  {
 const errores = s.replace(/[a-m]/g, "").length;
  const total = s.length;
  return `${errores}/${total}`;
}