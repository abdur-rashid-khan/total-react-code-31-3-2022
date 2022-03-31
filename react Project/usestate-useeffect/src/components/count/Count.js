import React, { useEffect, useState } from 'react';
import ShowCount from '../ShowCount/ShowCount';

const Count = () => {
   const [count,setCount]=useState(0);
   const plus=()=>{
      const result=count+1;
      setCount(result);
   }
   useEffect(()=>{
      console.log(count)
   },[count])
   return (
      <div>
         <h1>Counts : {count}</h1>
         <button onClick={plus}>plus</button>
         <ShowCount number={count}></ShowCount>
      </div>
   );
};

export default Count;