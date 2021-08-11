import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

const Nome = (props) => {
  return <p><b>{props.nome}</b></p>
}

const list = [
  "banana",
  "maca",
  "pera",
  "uva"
]

const Lista = () => {
  return list.map((val, i)=>{
    return <li key={i}>
      <Button onClick={() => log(val)} variant="success">
       {val}
      </Button>
    </li>
  })
}

const Image = () => {
  return <img 
  src="https://www.dailydot.com/wp-content/uploads/2019/02/watch_family_guy_season_17_online_free_amazon.jpg"
  alt="familyGuy"></img>
}

const Link = () => {
  return <a href="https://google.com">Google</a>
}


function App() {
  return (
    <div className="App">
      <Nome nome="João Vitor de Oliveira Mendes"></Nome>
     <ul>
       <Lista></Lista>
     </ul>
       <Image></Image>
       <br />
        <Button variant="danger">
          <Link></Link>
        </Button>
    </div>
  );
}

function log(val) {
  alert(val)
}

export default App;
