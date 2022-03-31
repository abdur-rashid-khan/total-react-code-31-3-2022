// array in useing 
// push
/* const number=[1,3,4,5,6];
let pushNumber=number.push(7,8);
console.log(number); */

// useing pop
// const number =[1,2,3,5,6,6];
// let popNum=number.pop(6);
// console.log(number);
// console.log(number.length);
// console.log(number[0]);
// console.log(typeof number[0]);


// checking number
/* const number1 =['a','b','c'];
console.log(typeof number1[1]); */

// includes  
/* const number =['a','b','c'];
const number1 =[1,2,3,5,6,6];
if(number.includes('a')){
   console.log('rearch result a');
}else{
   console.log('Not result found');
} */


/* // forEach
const number =['a','b','c'];
const number1 =[1,2,3,5,6,6]
number.forEach(element => {
   console.log(element);
}); */



// map
/* const maparray =[1,2,3,5,6,6]
const mapFun=(number)=>{
   let result = number * 2;
   return result;
}
console.log(maparray.map(mapFun));
 */


/* // filter
   const number =['a','b','c'];
   const number1 =[1,2,3,5,6,6]
   const fillterArray=(number)=>{
      let newData=[];
      if(number===1){
         console.log('same value')
         return ;
      }else{
         newData=newData.push(number);
      }
      return newData;
   }
   console.log(number1.filter(fillterArray)) */


   // find
   const number =['a','b','c'];
   const number1 =[1,2,3,5,6,6]
   const fillterArray=(number)=>{
      let newData=[];
      if(number===1){
         console.log('same value')
         return ;
      }else{
         newData=newData.push(number);
      }
      return newData;
   }
   console.log(number1.find(fillterArray))