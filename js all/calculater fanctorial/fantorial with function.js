// fantorial with function 
function fantorial(number){
  let  num= 1;
  for(let i = 1 ; i <= number; i++ ){
    num=num * i;
    console.log(i);
  }
  return num;
}
let tagetNumber =13;
console.log( " Total number = " + fantorial(tagetNumber));