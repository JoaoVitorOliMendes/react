import logo from './logo.svg';
import './App.css';

function log() {
  console.log("Button clicked");
}

const Node1 = (props) => <button onClick={log}> { props.text } </button>
const Node2 = () => <h1>Elemento 1</h1>


function App() {
  return (
    <div className="App">
      <Node2 />
      <h1>Titulo</h1>
      <Node1 text="Click" />
    </div>
  );
}

export default App;
