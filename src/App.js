import './App.css';
import Button from './Button/Button';
import Input from './Input/Input';
import { classificacaoTriangulo } from './triangulo';


function App() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row w-50 pt-4">
        <Input exibir="true" index={0} />
        <Input exibir="true" index={1} />
        <Input exibir="true" index={2} />
        <Input exibir="false" value={ classificacaoTriangulo } />
        <Button nome="Calcular" className="col-12"/>
      </div>
    </div>
  );
}
export default App;
