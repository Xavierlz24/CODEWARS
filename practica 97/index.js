function pigIt(str){
  return str.replace(/[a-z]+/ig, x => x.slice(1) + x[0] + "ay")
}