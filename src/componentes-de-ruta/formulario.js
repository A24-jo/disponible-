import React, { useState } from 'react';
import '../hoja-de-estilos/formulario.css';
import { Link } from 'react-router-dom';

function Formulario (){

    const [estado,setEstado]=useState({nombre:'',correo:'',contraseñas:''})
    const [eror,setEror]= useState({nombre:false,correo:false,contraseñas:false})


    function handleSubmit(e){
      e.preventDefault()
      const validador= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        setEror({
            ...eror,
            nombre: estado.nombre.length<6,
            correo : !validador.test(estado.correo),
            contraseñas:estado.nombre.length<8, 
        })

        }
    
    function handlechange (e){
      setEstado({...estado,[e.target.name]:e.target.value});

      const validador= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      if (estado.nombre.length>6) {
           setEror({...eror,nombre:false})
      }         
      if (validador.test(estado.correo)) {
         setEror({...eror,correo:false})
      }

    }
    
    return(
        <div className='padress'>

          <button data-text="Awesome" className="button">
             <span className="actual-text">&nbsp;Rick and Morty&nbsp;</span>
             <span className="hover-text" aria-hidden="true">&nbsp;Rick and Morty&nbsp;</span>
           </button>

        <div className="form-container">

      <form className="form"  onSubmit={handleSubmit} >
        
        <div className="form-group">
          <label >Nombres </label>  
          <input name='nombre' type='text'  value={estado.nombre}  onChange={(evento)=>handlechange(evento) }  />
          {eror.nombre ? <span>faltan datos</span> :null}
        </div>

        <div className="form-group" > 
          <label >email</label>
          <input name='correo' type='text'  value={estado.correo}  onChange={(u)=>handlechange(u)}/> 
          {eror.correo ? <span>ingresa un email valido</span> : null}         
        </div>

        <div className="form-group">
          <label >contraseñas</label>
          <input name='contraseñas' type='password'  value={estado.contraseñas} onChange={(o)=>handlechange(o)}/>  
          {eror.contraseñas ? <span>la contraseñasde ve tener minimo 8 caracteres</span>:null}        
        </div>

        <button className="form-submit-btn" type="submit"><Link to={!eror.nombre && !eror.correo && !eror.contraseñas ? '/menu1' :null}>Submit</Link></button>
                                                          

      </form>

    </div>
    </div>
    )
}


export default Formulario;