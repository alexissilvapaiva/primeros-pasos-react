import React from 'react';
import '../hojas-de-estilo/Testimonio.css'
function Testimonio(props) {
    return (
      <div className = 'contenedor-gral'>
        <img className= 'imagen-testimonio' src= {require(`../imagenes/testimonio-${props.img}.png`)}
                                            alt ='imagen' />
        <div clasName = 'contenedor-texto'>
          <p className='nombre'><strong>{props.nombre}</strong>en {props.pais}</p>
          <p className= 'cargo'> {props.cargo} en <strong>{props.empresa}</strong></p>
          <p classname ='texto'>"{props.testimonio}"</p>
        </div>
      </div>
    );
}

export default Testimonio;