import logo from './logo.svg';
import './App.css';

function App() {
  const users=['Rashid khan','Hasibul Hassan','summon Hossin','Rabbi','Meherap'];
  return (
    <div className="continer">
      {/* <Player></Player>
      <Player></Player>
      <Player></Player> */}


      {/* <div className="">
        <UserName name="Rashid khan" age="18"></UserName>
        <UserName name="rabbi khan" age="18"></UserName>
        <UserName name="meherap" age="18"></UserName>
      </div> */}
      {
        users.map(user=><UserName name={user}></UserName> )
      }
    </div>
  );
}
//  player
/*const Player=()=>{
  return(
    <div className="content">
        <h1>Shakib all hassan</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis vero libero rem incidunt praesentium mollitia. Necessitatibus illum explicabo accusamus harum ab quam repellat eum voluptatum odio, beatae incidunt ratione.</p>
    </div>
  )
}*/

// user name set in props
// const UserName=(props)=>{
//   const {name,age}=props;
//   return(
//     <div className="content">
//       <h1>Name : {name}</h1>
//       <p>Age : {age}</p>
//     </div>
//   )
// }

// using array
const UserName=(props)=>{
  const {name}=props;
  return(
    <div className="content">
      <h1>{name}</h1>
    </div>
  )
}
export default App;
