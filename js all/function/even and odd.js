// even and odd number check
function oddAndEnven(num){
   let oddNumber=  num % 2;
   if(oddNumber === 0 ){
      console.log("it's even number And ");
      return true;  
   }else{
      console.log("it's odd number And ");
      return false;  
   }
   }
let numbers= 30;
console.log(oddAndEnven(numbers));