import React, { useEffect, useState } from 'react';
import '../hoja-de-estilos/ruta.css';
import Cartas from '../componentes/cartas';
import { Link } from 'react-router-dom';

function Ruta3 () {
    const [datos,setDatos]=useState([])
    const [valor,setValor]=useState('')
    const [edi,setEdi]=useState([])

    useEffect(()=>{
       async function Apimorty (){
          const primerdad= await fetch('https://rickandmortyapi.com/api/character?page=3');
          const data= await primerdad.json();
          setDatos(data.results)
          setEdi(data.results)

       }
       Apimorty()
    },[]) 
   function nuevoclic (){
      const nuevo=datos.filter((q)=>q.name.toLowerCase().includes(valor.toLocaleLowerCase()))
      setDatos(nuevo)
   }

   function Borar (ide){
    const delte = datos.filter((e)=>e.id!==ide)
    setDatos(delte)
   }

  return (
    <div className="App">
      <div className ='contboton'> 
      <button className='boton'><Link to='/menu1'>Pájina 1 </Link> </button>
        <button className='boton'><Link to='/menu2'>Pájina 2</Link> </button>
        <button className='boton'><Link to='/menu3'>Pájina 3</Link></button>
        <button className='boton'><Link to='/menu4'>Pájina 4</Link></button>
        <button className='boton'><Link to='/menu5'> + carts </Link></button>
        <button className='boton-busacor' onClick={()=> valor !=='' ? nuevoclic():setDatos(edi)}>  BUSCAR </button>
        <input className='busacor'  placeholder='buscar'  onChange={(evento)=> setValor(evento.target.value)} ></input>

      </div>
      <div className='padre'>
       {
        datos.map(morty=>{
          return(
            <Cartas
            ide={morty.id}
            key={morty.id}
            nombre={morty.name}
            estado={morty.status}
            especie={morty.species}
            tipo={morty.type}
            genero={morty.gender}
            origen={morty.origin.name}
            imagen={morty.image}
            celle={Borar}
            ></Cartas>
          )
        })
       }
      </div>
    </div>
  );
}

export default Ruta3;