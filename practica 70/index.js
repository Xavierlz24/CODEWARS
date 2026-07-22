function longest(s1, s2) {
 const letras = new Set( (s1 + s2).split('') );
 return Array.from(letras).sort().join('');
}