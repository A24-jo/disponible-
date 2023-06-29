import React, { useState } from 'react';
import './App.css';

function App() {

    const [valor,setValor]=useState('')

  return (
    <div className="App">
      <div className='contboton'>
        <button className='boton' >  BUSCAR </button>
        <input className='busacor' placeholder='buscar' value={valor} onChange={(e)=> setValor(e.target.value)} ></input>
        <div>{valor}</div>
      </div>
    </div>
  );
}

export default App;
