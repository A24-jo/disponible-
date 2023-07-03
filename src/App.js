import { Route, Routes } from 'react-router-dom';
import './App.css';
import Ruta1 from './componentes-de-ruta/ruta';
import Ruta2 from './componentes-de-ruta/ruta-morty';
import Ruta3 from './componentes-de-ruta/ruta-rick';
import Ruta4 from './componentes-de-ruta/ruta-reir';
import Formulario from './componentes-de-ruta/formulario';
import Agregar from './componentes-de-ruta/agregas-cartas';


function App() {


  return (
    <div className='Appis'>
      <Routes>
        <Route  path='/menu1' element={<Ruta1></Ruta1>} />
        <Route path='/menu2' element={<Ruta2 ></Ruta2>} />
        <Route path='/menu3' element={<Ruta3></Ruta3>} />
        <Route path='/menu4' element={<Ruta4></Ruta4>} />
        <Route path='/menu5' element={<Agregar></Agregar>} />
        <Route path='/' element={<Formulario></Formulario>}/>
      </Routes> 
    </div>
  );
}


export default App;
