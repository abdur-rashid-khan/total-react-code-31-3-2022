// useing map with function
const numbers=[2,3,4,5,6];
const output=[];
// for(const number of numbers){
//    output.push(number*2);
// }
// console.log(output);

/* function useing */
/* function total(number){
   for(const num of number){
      const result = num * 2;
      output.push(result);
   }
}
total(numbers)
console.log(output); */



/* using Array function */
// const fastArrayFunction = (numbers) =>{
//    for (const number of numbers){
//       const result = number * 2;
//       output.push(result);
//    }
// }
// fastArrayFunction(numbers);
// console.log(output);




// using map 
const loopFunction =(numbers)=>{
   const result =numbers * 2;
   return result;
}
output.push(numbers.map(loopFunction));
console.log(...output);