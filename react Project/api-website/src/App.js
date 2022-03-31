import './App.css';
import Countries from './component/contrys/Countries';
import './component/contrys/Countries.css';
import './component/contry/country.css'
function App() {
  return (
    // all output
    <div className="container">
      <h1 className='header'>All Country</h1>
      <hr />
      {/* <apiCall></apiCall> */}
      <Countries></Countries>
      {/* <Country></Country> */}
    </div>
  );
}

export default App;
