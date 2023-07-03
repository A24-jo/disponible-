import React from "react";
import '../hoja-de-estilos/cartas.css'

function Cartas({nombre,estado,especie,tipo,genero,origen,imagen,celle,ide}){

    
    return (
       <div className='carta'>
         <div className='fondo-de-carta'>
        <button className='borrador' onClick={()=>celle(ide)}>x</button>
        <p className='texto-cartas'> {nombre}<br/>{estado}<br/>{especie}<br/>{tipo ? tipo:'no hay tipo'}<br/>{genero}<br/>{origen}<br/> </p>
        <img className='image-cartas' src={imagen} alt='hay un morty' />
        </div>
       </div> 
    )
}

export default Cartas;