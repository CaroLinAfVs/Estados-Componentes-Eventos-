import Header from './componentes/Header';
import Input from './componentes/Input';
import Boton from './componentes/Boton';
import {useState} from "react";


function App() {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  

  return (
    <div className="App">
      <Header title="Desafio estados de los componentes y eventos"/>
      <div className='data'> 
        <Input 
        setValue={setName} 
        value={name} 
        name="Nombre"
        placeholder="Ingresa un texto"
        type="text"
        />
        <Input 
        setValue={setPassword} 
        value={password} 
        name="Contraseña"
        placeholder="Ingresa una contraseña"
        type="password"
        />
        {password === "252525" && <Boton text="Validar"/>}
        
      </div>

    </div>
  );
}

export default App;
