import logo from './logo.svg';
import './App.css';

function App() {
  const users=[
    {name:'Rashid khan ', age:18.5, profession:'Web Developer'},
    {name:'Rabbi khan ', age:12, profession:'Web Developer'},
    {name:'Hasibul Hassan', age:19, profession:'Politics'},
    {name:'Mahamud Hassan', age:17, profession:'Student'},
    {name:'Summon Hassan', age:17, profession:'Business'},
  ]
  // console.log(users.length)
  return (
    <div className="App">
      <div className="container">
        {
          users.map(user=><ShowUserData data={user}></ShowUserData>)
        }
      </div>
    </div>
  );
}
// ShowUserData
const ShowUserData=(props)=>{
  const {name,age,profession}=props.data;
  return(
  <div className="content">
    <h2>Name : {name}</h2>
    <h4>Age : {age}</h4>
    <strong>Profession : {profession}</strong>
  </div>
  )
}

export default App;
