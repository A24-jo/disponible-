import React, {  useState } from 'react';
import '../hoja-de-estilos/crear-cartas.css'
import Cartas from '../componentes/cartas';


function Agregar (){

//    const arreglocartas={id:'',nombre:'',estado:'',especie:'',tipo:'',genero:'',origen:'',imagen:''}

  const [carta,setCarta]=useState({id:0,nombre:'',estado:'',especie:'',tipo:'',genero:'',origen:'',imagen:''});
  const [cache,setCache]=useState([]);

  function handleSubmit(a){
    a.preventDefault()
   
   setCache([...cache,carta])
  }
 

    return(
        <div className='crear-padre'>
            <div className='conte-crear'>
                <form onSubmit={(a)=>handleSubmit(a)}>
                    <h1> ingrese los datos de tu peronaje a crear </h1>
                    <div>
                        <h2>id</h2>
                        <input type='number' onChange={(d)=>setCarta({...carta,id:d.target.value})}></input>
                    </div>
                    <div>
                        <h2>Nombres</h2>
                        <input  onChange={(d)=>setCarta({...carta,nombre:d.target.value})}></input>
                    </div>
                    <div>
                        <h2>estado</h2>
                        <input onChange={(a)=> setCarta({...carta,estado:a.target.value})}></input>
                    </div>
                    <div>
                        <h2>espacie</h2>
                        <input onChange={(a)=> setCarta({...carta,especie:a.target.value})}></input>
                    </div>
                    <div>
                        <h2>tipo</h2>
                        <input onChange={(b)=>setCarta({...carta,tipo:b.target.value})}></input>
                    </div>
                    <div>
                        <h2>genero</h2>
                        <input  onChange={(c)=>setCarta({...carta,genero:c.target.value})}></input>
                    </div>
                    <div>
                        <h2>origen</h2>
                        <input  onChange={(c)=>setCarta({...carta,origen:c.target.value})}></input>
                    </div>
                    <div>
                        <h2>Link de imagen</h2>
                        <input  onChange={(c)=>setCarta({...carta,imagen:c.target.value})}></input>
                    </div>
                    <button type='submit'>CREAR</button>
                </form>
            </div>
            <div className='new-carts'>
                {
                cache.map((a)=>{
                 return(
                 <Cartas
                 hey={a.id}
                 ide={a.id}
                 nombre={a.nombre}
                 estado={a.estado}
                 especie={a.especie}
                 tipo={a.tipo}
                 genero={a.genero}
                 origen={a.origen}
                 imagen={a.imagen}
                 >
                 </Cartas>
                 ) 
                })}
            
            </div>

        </div>
    )
}

export default Agregar;