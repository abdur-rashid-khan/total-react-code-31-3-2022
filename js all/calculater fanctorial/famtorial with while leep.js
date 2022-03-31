// Factorial  with while loop in javascript
function factorial(number){
  let num = 1;
  let i= 1;
  while( i <= number){
    num = num * i;
    console.log(i);
    i++;
  }
  return num;
}
// cell function
let targetNumber= 6;
console.log('Total Number is = ' + factorial(targetNumber));










