function openOrSenior(data){
  return data.map(([edad, handicap]) => {
    if(edad >= 55 && handicap > 7){
      return 'Senior';
    }else{
      return 'Open';
    }
  });
}
