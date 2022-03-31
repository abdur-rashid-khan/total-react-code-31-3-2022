// two object compare
const rashid={
   age:21,
}
const nirob={
   age:211,
}

/* if(rashid===nirob){
   console.log('your condition is true');
}else{
   console.log('your condition is false');
} */


// one stymes 
/* if(JSON.stringify(rashid)===JSON.stringify(nirob)){
   console.log('your condition is true');
}else{
   console.log('your condition is false');
}
 */

/* function compare(condition1,condition2){
   if(condition1.age===condition2.age){
      console.log('your condition is true');
   }else{
      console.log('your condition is false');
   }
}
compare(rashid,nirob); */


// best function for chacking coundition in object
function compare(condition1,condition2){
   if(Object.keys(condition1).length !== Object.keys(condition2).length){
      return false;
   }
      for(const prop in condition1){
         if(condition1[prop] !== condition2[prop]){
            return false;
         }
      }
      return true;
}
let output=compare(rashid,nirob);
console.log(output);