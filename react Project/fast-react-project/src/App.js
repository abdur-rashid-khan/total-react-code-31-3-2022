import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <Person></Person>
      <div className="otherText">
        <strong>Note : </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti.
      </div>
      <Person></Person>
    </div>
  );
};
// creat function 
function Person(){
  return(
    <div className="text">
      <h1>Rshid khan</h1>
      <p>Web Developer</p>
    </div>
  )
}







// no cheang
export default App;
