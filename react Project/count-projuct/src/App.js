import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    
    <div className="container">
      <div className="items">
        <Count></Count>
      </div>
      <div className="items">
        <Count></Count>
      </div>
      <div className="items">
        <Count></Count>
      </div>
      <div className="items">
        <Count></Count>
      </div>
      
    </div>
  );
}
// add other function 
function Count(){
  const [count , setCount]=useState(0);
  const plus=()=>{
    const newCount=count+1;
    setCount(newCount);
  }
return(
  <div className="content">
    <h1>Count : {count}</h1>
    <button onClick={plus} id='btn'>Inrement</button>
  </div>
)
} 




//mo cheang
export default App;
