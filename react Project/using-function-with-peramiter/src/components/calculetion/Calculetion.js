import React from 'react';

const sam=(num1, num2)=>{
   return (num1 + num2)
}

const Calculetion = () => {
   return (
      <div>
         <h2>Total sam : {sam(1,2)}</h2>
      </div>
   );
};

// other function multiplication
const multiplication=(num1 , num2)=>{
   return(num1 * num2);
}


// display multiplication data 

const Display=()=>{
   return(
      <div>
         <h2>Total multiplication : {multiplication(2,2)}</h2>
      </div>
   )
}
export {Calculetion,Display};