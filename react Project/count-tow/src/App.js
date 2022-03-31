import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
return (
   <div className="container">
      <Count></Count>
      <Count></Count>
      <Count></Count>
   </div>
);
}
// creact function
const Count=()=>{
   const [count,setCount]=useState(0);
   // increase
   const increase=()=>{
      const newCount=count+1;
      setCount(newCount);
   }
   // decrease
   const decrease=()=>{
      const newCount=count-1;
      setCount(newCount);
   }
   return(
      <div className='content'>
         <h1>Count : {count}</h1>
         <button id='btn' onClick={increase}>Increase</button>
         <button id='btn2' onClick={decrease}>Decrease</button>
      </div>
   )
}









export default App;
