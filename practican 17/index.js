function abbrevName(name){
  return name
    .trim()
    .split(' ')
    .map(palabra => palabra[0].toUpperCase())
    .join('.');
}