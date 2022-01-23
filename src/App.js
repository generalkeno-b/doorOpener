import logo from './logo.svg';
import './App.css';
import axios from 'axios'
function getDoor()
{
  axios.get('http://192.168.1.69:1234/garagedoor/1');
}

function App() {
  return (
    <div className="App">
    <button onClick={getDoor}>Open Door</button>
    </div>
  );
}

export default App;
