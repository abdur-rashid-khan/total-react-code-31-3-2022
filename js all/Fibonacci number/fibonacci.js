/*____________----------------__________ Fibonacci number ____________----------------__________*/
function fibonacciNumber(number){
  // error same warrng text and other
  if(typeof number != 'number' ){
    // alert('place enter valid number');
    return 'place enter valid number';
  }else if(number < 2){
    return 'place enter positive value'
  }
  let fibo = [0 , 1];
  for(let i = 2; i<number; i++ ){
    // sutro in fibo 
    fibo[i] = fibo[i-1] + fibo[i-2];
  }
  return fibo;
}
let targetNumber= -2;
console.log(fibonacciNumber(targetNumber));
/*____________----------------__________ or ____________----------------__________*/
/* let fibo =[0 , 1];
for(let i = 2; i<=12; i++ ){
  // sutro in fibo 
  fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); */