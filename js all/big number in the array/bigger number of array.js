/* Bigger number of array */


/* 
function biggerNumber(numbers){
  let max= numbers[0];
  for (let i=0; i<numbers.length; i++){
    let element = numbers[i];
    if( element > max ){
      max = element;
    }
  }
  return max 
}
let ages=[1,12,34,54,45];
console.log(biggerNumber(ages)); 
*/


/*___________------------------------- or ___________-------------------------*/


// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;
// for (i=0; i<=largest;i++){
//   let max= array[i];
//     if (max>largest) {
//         var largest=array[i];
//     }
// }
// console.log(largest);


// small number of the array 

/* function smallNumber(numbers){
  let max = 0;
  for( let i=0; i<numbers.length; i++){
    let element = numbers[i];
    if( element > max ){
      max= element;
    }
  } 
  return max;
}
let num= [12,12,3,3,4,45,];
console.log(smallNumber(num));
 */


/*_______________------------------ total number of of sum _______________------------------*/
function numberSam(numbers){
  let sum = [0];
  for(let i =0 ; i<numbers.length; i++){
    let element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
let num= [12,5,];
console.log(numberSam(num));

