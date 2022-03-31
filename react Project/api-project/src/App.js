import logo from './logo.svg';
import './App.css';

import {useState ,  useEffect} from 'react';

function App() {
  return (
    <div className="container">
      <div className="content-header">
        <h2>All user</h2>
        <hr />
      </div>
      <User></User>
    </div>
  );
}
const User = () =>{
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);
  return(
    <div className="content">
      {
        users.map(userData=>getData(userData))
      }
    </div>
  )
}
const getData=(props)=>{
  const {name,email}=props;
  const {city,zipcode}=props.address;
  return(
    <div className='info'>
      <h1>name : {name}</h1>
      <h2>email : {email}</h2>
      <h3>city : {city}</h3>
      <h4>zipcode : {zipcode}</h4>
    </div>
  )
}

export default App;
