function squareSum(numbers){
  return numbers.reduce((suma, num) => suma + num ** 2, 0);
}